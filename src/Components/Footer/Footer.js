import React, { PureComponent } from 'react';
import FooterBackground from '../../backgroundElements/down_box.png'
import RiseDown from '../../backgroundElements/rise_footer.png'
import FooterGroup from '../../backgroundElements/foter_group.png'
class Footer extends PureComponent {

    render() {

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


export default Footer;
