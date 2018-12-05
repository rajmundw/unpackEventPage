import React, { PureComponent } from 'react';
import {NavLink} from 'react-router-dom'
class MenuList extends PureComponent {
    componentDidMount() {
        if (window.innerWidth * 0.16 > window.pageYOffset) {
            document.querySelector('.menu-list').classList.add('menu-list-white')
        }
    }
    render() {

        return (
            <div className="menu-list container p-0">
                <div className='row'>
                    <div className="col-12">
                        <ul className="pl-0 pr-0" >
                            <li className="menu-animation1"><a href="#sansara-group">SANSARA GROUP</a></li>
                            <li className="menu-animation2"><a href="#mission">MISJA & WIZJA</a></li>
                            <li className="menu-animation3"><a href="#offer">OFERTA</a></li>
                            <li className="menu-animation4"><a href="#implementation">REALIZACJA</a></li>
                            <li className="menu-animation5"><a href="#contact">KONTAKT</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}


export default MenuList;
