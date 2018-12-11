import React, {PureComponent} from 'react'
import Header from '../../Components/Header/Header'
import UnpackComponent from '../../Components/UnpackSection/UnpackComponent'
import AnimationBubbles from '../../Components/AnimationBubbles/AnimationBubbles'
import AnimationBubbles2 from '../../Components/AnimationBubbles/AnimationBubbles2'
import BackgroundLaptop2 from '../../backgroundElements/bubbles2.png'
import BackgroundLaptop from '../../backgroundElements/bubbles.png'
import BackgroundTablet from '../../backgroundElements/bubbles-tablet.png'
class InitialLayout extends PureComponent  {
    constructor(props){
        super()
        this.state={
            //bubbles animation
            shouldAnimateBubbles:false,
            // current width to bubbles animatiom img width
            currentWindowWidth:window.innerWidth,
            // to positon absolute of bubbles img
            siteMaxHeight:''
        }
        this.unpackEventAnimation=''
    }
    componentDidMount() {
        // unpack element to animation
        const unpackElement=document.querySelector('.unpack-div')

        // resize to get to now current width
        window.addEventListener('resize',()=>{
            this.setState({
                currentWindowWidth:window.innerWidth
            })
        })

        //unpack animation
        this.unpackEventAnimation = setInterval(()=> {
            if(!unpackElement.classList.contains('transparent')){
                unpackElement.classList.add('transparent')
            }else{
                unpackElement.classList.remove('transparent')
            }
            console.log(unpackElement.classList.contains('transparent'),this.unpackEventAnimation)
        }, 1000);

    }

    shouldComponentUpdate(nextProps,nextState){

        if(this.state.shouldAnimateBubbles) {
            // if bubbles is visible during resize it can change bacause for laptop and mobile/tablet layout images are other
            if (this.state.currentWindowWidth > 768 && nextState.currentWindowWidth <= 768) {
                document.querySelector(".bubbles-img-1").setAttribute('src',`${BackgroundTablet}`)
                document.querySelector(".bubbles-img-2").style.display="none"
            } else if (this.state.currentWindowWidth <= 768 && nextState.currentWindowWidth > 768) {
               document.querySelector(".bubbles-img-1").setAttribute('src',`${BackgroundLaptop}`)
                document.querySelector(".bubbles-img-2").setAttribute('src',`${BackgroundLaptop2}`)
                document.querySelector(".bubbles-img-2").style.display="block"
            }
        }

        // cases when componen should render
        if(nextState.shouldAnimateBubbles!==this.state.shouldAnimateBubbles ){
            return true
        }else{
            return false
        }
    }
    componentDidUpdate() {
        // delete parent bubbles img div
        if (document.querySelector('.a')) {
            document.querySelector('.a').style.height = `0px`
        }
        if (document.querySelector('.b')) {
            document.querySelector('.b').style.height = `0px`
        }
    }

    // after ending bubbles animation add position absolute for bubbles img
    unpackedEvent(){

       if(document.querySelector('.bubbles') && document.querySelector('.bubbles2')) {
            document.querySelector('.bubbles').style.position = 'absolute'
            document.querySelector('.bubbles').style.top = `${-this.state.siteMaxHeight}px`
            document.querySelector('.bubbles2').style.position = 'absolute'
            document.querySelector('.bubbles2').style.top = `${-this.state.siteMaxHeight}px`

        }

        //rendering rest of page after scroll to unpack anaimation
        setTimeout(()=>{
            // props function which render rest of page
            this.props.renderRestOfPage()
            //make a background for laptop layout on 100% width and height
            if(window.innerWidth>768) {
                    document.querySelector('body').style.backgroundSize='100% 100%'
                }
            },1500)
    }

    scrollToUnpack(){

        // set tiemout and start scroll to unpack div animation
        setTimeout(()=>{
            console.log(document.querySelector('.scroll-to-unpack'))

            document.querySelector('.scroll-to-unpack').classList.remove('transparent')
            document.querySelector('.scroll-to-unpack').style.height=`0px`
            document.querySelector('.scroll-to-unpack').classList.add('scroll-to-unpack-animation')
        //start next function
            this.unpackedEvent()
        },3000)
    }

    unpackEvent=()=> {
        const unpackElement = document.querySelector('.unpack-div')
        if (unpackElement.classList.contains('transparent')) {
            //remove transparent class
            unpackElement.classList.remove('transparent')
        }
        document.querySelector('.menu').style.visibility = 'visible'
        // clear interval
        clearInterval(this.unpackEventAnimation)

        if(!this.state.shouldAnimateBubbles){
        // statring bubbles animation
            this.setState({
                shouldAnimateBubbles:true,
                siteMaxHeight:document.getElementsByTagName('body')[0].getBoundingClientRect().height
            })
        }
        // starting other function
        this.scrollToUnpack()
    }
    render(){
            return (
                    <div className="initial-layout">
                        <Header/>
                        <UnpackComponent unpackEvent={this.unpackEvent}/>
                        <AnimationBubbles siteMaxHeight={this.state.siteMaxHeight}
                                                shouldAnimated={this.state.shouldAnimateBubbles}/>
                        <AnimationBubbles2 siteMaxHeight={this.state.siteMaxHeight}
                                           shouldAnimated={this.state.shouldAnimateBubbles}/>
                    </div>
            )
    }
}

export default InitialLayout