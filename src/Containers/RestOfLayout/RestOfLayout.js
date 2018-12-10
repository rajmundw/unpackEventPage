import React, { PureComponent } from 'react';
import SansaraGroup from '../../Components/SansaraGroup/SansaraGroup'
import TimeToUnpack from '../../Components/TiemToUnpack/TimeToUnpack'
import Slider from '../../Components/Slider/Slider'
import Implementation from '../../Components/Implementation/Implementation'
import Contact from '../../Components/Contact/Contact'
import Offer from '../../Components/Offer/Offer'
import Footer from '../../Components/Footer/Footer'
import {BrowserRouter, Route} from 'react-router-dom'
import Offerts from '../../Components/Offer/Offerts'
import Slider2 from '../../Components/Slider/Slider>768'
class RestOfLayout extends PureComponent {
    constructor(props){
        super()
        this.state={
            innerWidth:window.innerWidth
        }
    }
    componentDidMount(){

        // set state to get to know current width
        window.addEventListener('resize',()=>{
            this.setState({
                innerWidth:window.innerWidth
            })
        })

    }

    // cases when component should update only for changing laptop and tablet layout beacuse is other slider
    shouldComponentUpdate(nextProps,nextState){
        if( (nextState.innerWidth>768 && this.state.innerWidth<=768) ||
            (nextState.innerWidth<=768 && this.state.innerWidth>768)) {
            return true
        }
    }
    render() {
        // slider for mobile/tablet layout and rest of elements
        if (window.innerWidth <= 768) {
            return (
                <div className="rest-of-layout container p-0">
                    <SansaraGroup/>
                    <Slider/>
                    <TimeToUnpack/>
                    <Implementation/>
                        <Offer/>
                        <Contact/>
                        <Footer/>
                </div>
            )
        }// slider for laptop layout and other elements
        else{
            return (
                <div className="rest-of-layout container p-0">
                    <SansaraGroup/>
                    <Slider2/>
                    <TimeToUnpack/>
                    <Implementation/>
                    <Offer/>
                    <Contact/>
                    <Footer/>
                </div>
            )
        }
    }
}


export default RestOfLayout;
