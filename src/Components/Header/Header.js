import React, {PureComponent} from 'react'
import leftNavBar from '../../backgroundElements/rise_nav.png'
import Nav from '../Nav/Nav'
class Header extends PureComponent  {
    render(){
        return(
            <header>
                <div className="container no-gutters ">
                    <div className="row">
                        <div className="col-3   d-flex justify-content-center">
                            <img src={leftNavBar} />
                        </div>
                        <div className="language col-4 offset-5 pr-0">
                            <ul>
                                <li>PL </li>
                                <li>EN</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 pr-0 pl-0">
                            <Nav/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className=" col-12 ">
                            <div className="social-media">
                                <div className="icon-instagram"></div>
                                <div className="icon-facebook-squared"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header