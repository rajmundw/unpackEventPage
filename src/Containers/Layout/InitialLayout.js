import React, {PureComponent} from 'react'
import Header from '../../Components/Header/Header'
import UnpackComponent from '../../Components/UnpackSection/UnpackComponent'
import AnimationBubblesTablet from '../../Components/AnimationBubbles/AnimationBubblesTablet'
import AnimationBubbles from '../../Components/AnimationBubbles/AnimationBubbles'
import AnimationBubbles2 from '../../Components/AnimationBubbles/AnimationBubbles2'
import AnimationBubblesTablet2 from '../../Components/AnimationBubbles/AnimationBubblesTabletEmptyElement'
import fullPageBackground from '../../backgroundElements/background>768.png'
import BackgroundLaptop2 from '../../backgroundElements/bubbles2.png'
import BackgroundLaptop from '../../backgroundElements/bubbles.png'
import BackgroundTablet from '../../backgroundElements/bubbles-tablet.png'

import {BrowserRouter, Route} from 'react-router-dom'
class InitialLayout extends PureComponent  {
    constructor(props){
        super()
        this.state={
            shouldAnimateBubbles:false,
            currentWindowWidth:window.innerWidth,
            siteMaxHeight:''
        }
        this.unpackEventAnimation=''
    }
    componentDidMount() {

        const unpackElement=document.querySelector('.unpack-div')

        window.addEventListener('resize',()=>{
            this.setState({
                currentWindowWidth:window.innerWidth
            })
        })

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
            if (this.state.currentWindowWidth > 768 && nextState.currentWindowWidth <= 768) {
                document.querySelector(".bubbles-img-1").setAttribute('src',``)
                document.querySelector(".bubbles-img-2").setAttribute('src',`${BackgroundTablet}`)
            } else if (this.state.currentWindowWidth <= 768 && nextState.currentWindowWidth > 768) {
               document.querySelector(".bubbles-img-1").setAttribute('src',`${BackgroundLaptop}`)
                document.querySelector(".bubbles-img-2").setAttribute('src',`${BackgroundLaptop2}`)

            }
        }

        if(nextState.shouldAnimateBubbles!==this.state.shouldAnimateBubbles ){
            return true
        }else{
            return false
        }
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