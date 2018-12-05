import React, {PureComponent} from 'react'
import Header from '../../Components/Header/Header'
import UnpackComponent from '../../Components/UnpackSection/UnpackComponent'
import AnimationBubblesTablet from '../../Components/AnimationBubbles/AnimationBubblesTablet'
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
    }

    unpackedEvent(){
        console.log(this.state.siteMaxHeight)
        document.querySelector('.bubbles-tablet').style.position='absolute'
        document.querySelector('.bubbles-tablet').style.top=`${-this.state.siteMaxHeight}px`

        setTimeout(()=>{
            (this.props.renderRestOfPage()

            )},1500)
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
                        <AnimationBubblesTablet siteMaxHeight={this.state.siteMaxHeight} shouldAnimated={this.state.shouldAnimateBubbles}/>
                    </div>
            )

    }
}

export default InitialLayout