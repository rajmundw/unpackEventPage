import React, {PureComponent} from 'react'
import leftNavBar from '../../backgroundElements/rise_nav.png'
import Nav from '../Nav/Nav'
class Header extends PureComponent  {
    render(){
        return(
            <header>
                <div className="container no-gutters ">
                    <div className="row order-sm-1 ">
                        <div className="col-3 d-flex order-sm-1 justify-content-center rise-header">
                            <img src={leftNavBar} />
                        </div>
                        <div className="language col-4 col-sm-3 order-sm-3 offset-sm-0  col-sm-3 offset-5 pr-0">
                            <ul>
                                <li>PL </li>
                                <li>EN</li>
                            </ul>
                        </div>
                        <div className="col-12 pr-0 pl-0 order-sm-5 col-sm-12">
                            <Nav/>
                        </div>
                        <div className=" col-12 order-sm-2 col-sm-6 ">
                            <div className="social-media">
                                <div className="icon-instagram"></div>
                                <div className="icon-facebook-squared"></div>
                            </div>
                        </div>
                        <span className=" col-12 order-sm-4"></span>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header