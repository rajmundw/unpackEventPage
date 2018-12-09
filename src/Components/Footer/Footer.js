import React, { PureComponent } from 'react';
import FooterBackground from '../../backgroundElements/down_box.png'
import RiseDown from '../../backgroundElements/rise_footer.png'
import FooterGroup from '../../backgroundElements/foter_group.png'
class Footer extends PureComponent {

    render() {
        if(window.innerWidth>768) {
            return(
                <footer className="footer container p-0">
                    <div className='row'>
                        <div className="col-3 ">
                            <div className="icon-instagram"></div>
                            <div className="icon-facebook-squared"></div>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><a href="#sansara-group">SANSARA GROUP</a></li>
                                <li><a href="#mission">MISJA & WIZJA</a></li>
                                <li><a href="#offer">OFERTA</a></li>
                                <li><a href="#implementation">REALIZACJA</a></li>
                                <li><a href="#contact">KONTAKT</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <img src={FooterGroup}/>
                        </div>
                    </div>
                </footer>
            )
        }else {
            return (
                <footer className="footer container p-0">
                    <div className='row'>
                        <div className="col-12 pr-0 pl-0">
                            <img src={FooterBackground}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-3 ">
                            <img src={RiseDown}/>
                        </div>
                        <div className="col-6 ">
                            <div className="icon-instagram"></div>
                            <div className="icon-facebook-squared"></div>
                        </div>
                        <div className="col-3">
                            <img src={FooterGroup}/>
                        </div>
                    </div>
                </footer>
            )
        }
    }
}


export default Footer;