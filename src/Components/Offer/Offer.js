import React, { PureComponent } from 'react';
import OfferBackground from '../../backgroundElements/offer_background.png'
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import Offerts from "./Offerts";
class Offer extends PureComponent {

    render() {

        return (
            <BrowserRouter>
                <div>
                    <div className="offer container p-0" id="offer">
                        <div className='row'>
                            <div className="
                            col-10 col-xl-5 col-lg-5 col-md-5
                             offset-1 offset-xl-6 offset-lg-6 offset-md-6
                            ">
                                <h1>OFERTA</h1>
                                <p>ZOBACZ CO MOŻEMY DLA CIEBIE ZROBIC I WYBIERZ RODZAJ EVENTU, KTORY CIE INTERESUJE</p>
                                <NavLink to="/PelnaOferta"><button >ZOBACZ OFERTE</button></NavLink>
                            </div>
                        </div>

                        <div className="row">
                            <img src={OfferBackground} />
                        </div>

                    </div>
                    <div className="container p-0">
                        <Route path='/PelnaOferta' component={Offerts} />
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}


export default Offer;
