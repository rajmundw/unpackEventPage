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

class RestOfLayout extends PureComponent {
    constructor(props){
        super()
        this.state={
        }
    }
    render() {

            return (
                <BrowserRouter>
                    <div className="rest-of-layout container p-0">
                        <SansaraGroup/>
                        <Slider/>
                        <TimeToUnpack/>
                        <Implementation/>
                        <Offer/>
                        <Contact/>
                        <Footer/>
                    </div>
                </BrowserRouter>            )
        }
}


export default RestOfLayout;
