import React, {PureComponent} from 'react'
import Header from '../../Components/Header/Header'
import UnpackComponent from '../../Components/UnpackSection/UnpackComponent'
import AnimationBubblesTablet from '../../Components/AnimationBubbles/AnimationBubblesTablet'
import AnimationBubbles from '../../Components/AnimationBubbles/AnimationBubbles'
import AnimationBubbles2 from '../../Components/AnimationBubbles/AnimationBubbles2'
import fullPageBackground from '../../backgroundElements/background>768.png'
import {BrowserRouter, Route} from 'react-router-dom'
class InitialLayout extends PureComponent  {
    constructor(props){
        super()
        this.state={
            shouldAnimateBubbles:false,
            currentWindowWidth:window.innerWidth,
        }
        this.unpackEventAnimation=''
    }
    componentDidMount() {
        const unpackElement=document.querySelector('.unpack-div')
        this.unpackEventAnimation = setInterval(()=> {
            if(!unpackElement.classList.contains('transparent')){
                unpackElement.classList.add('transparent')
            }else{
                unpackElement.classList.remove('transparent')
            }
            console.log(unpackElement.classList.contains('transparent'),this.unpackEventAnimation)
        }, 1000);

    }
    componentDidUpdate() {
        if (document.querySelector('.a')) {
            document.querySelector('.a').style.height = `0px`
        }
        if (document.querySelector('.b')) {
            document.querySelector('.b').style.height = `0px`
        }
    }

    unpackedEvent(){
        console.log(this.state.siteMaxHeight)
        if(document.querySelector('.bubbles-tablet')) {
            document.querySelector('.bubbles-tablet').style.position = 'absolute'
            document.querySelector('.bubbles-tablet').style.top = `${-this.state.siteMaxHeight}px`
        }else if(document.querySelector('.bubbles') && document.querySelector('.bubbles2')) {
            document.querySelector('.bubbles').style.position = 'absolute'
            document.querySelector('.bubbles').style.top = `${-this.state.siteMaxHeight}px`
            document.querySelector('.bubbles2').style.position = 'absolute'
            document.querySelector('.bubbles2').style.top = `${-this.state.siteMaxHeight}px`

        }
        setTimeout(()=>{
            this.props.renderRestOfPage()
                if(window.innerWidth>768) {
                    document.querySelector('body').style.backgroundSize='100% 100%'
                }
            },1500)
    }

    scrollToUnpack(){
        /*console.log(document.querySelector('.scroll-to-unpack').classList)*/
        setTimeout(()=>{
            console.log(document.querySelector('.scroll-to-unpack'))

            document.querySelector('.scroll-to-unpack').classList.remove('transparent')
            document.querySelector('.scroll-to-unpack').style.height=`0px`
            document.querySelector('.scroll-to-unpack').classList.add('scroll-to-unpack-animation')
            this.unpackedEvent()
        },3000)
    }

    unpackEvent=()=> {
        const unpackElement = document.querySelector('.unpack-div')
        if (unpackElement.classList.contains('transparent')) {
            unpackElement.classList.remove('transparent')
        }
        document.querySelector('.menu').style.visibility = 'visible'
        clearInterval(this.unpackEventAnimation)
        console.log(document.getElementsByTagName('body')[0].getBoundingClientRect().height)
        if(!this.state.shouldAnimateBubbles){
            this.setState({
                shouldAnimateBubbles:true,
                siteMaxHeight:document.getElementsByTagName('body')[0].getBoundingClientRect().height
            })
        }
        this.scrollToUnpack()
    }
    render(){
        if(window.innerWidth<=768) {
            return (
                    <div className="initial-layout">
                        <Header/>
                        <UnpackComponent unpackEvent={this.unpackEvent}/>
                        <AnimationBubblesTablet siteMaxHeight={this.state.siteMaxHeight}
                                                shouldAnimated={this.state.shouldAnimateBubbles}/>
                    </div>
            )
        }else{
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
}

export default InitialLayout