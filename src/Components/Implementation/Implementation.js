import React, { PureComponent } from 'react';
import ImplementationBackground from '../../backgroundElements/implementation_background.png'
import Projects from "../Implementation/Projects";
import {BrowserRouter, Route, NavLink} from 'react-router-dom'

class Implementation extends PureComponent {

    showProjects(){
        if(window.innerWidth>768) {
            document.getElementById('offer').style.marginTop = "10vw"
        }
    }
    render() {

        return (
            <BrowserRouter>
                <div>
                    <div className="implementation container p-0" id="implementation">
                        <div className='row'>
                            <div className="
                            col-10 col-xl-6 col-md-6 col-lg-6
                            offset-1">
                                <h1>REALIZACJA</h1>
                                <p>NASZE PROJEKTY ZREALIZOWANE W OSTATNIM CZASIE:</p>
                                <NavLink to="/Projekty"><button onClick={this.showProjects}>ZOBACZ PROJEKTY</button></NavLink>
                            </div>
                        </div>
                        <div className="row">
                            <img src={ImplementationBackground} />

                        </div>
                    </div>
                    <div className="container p-0">
                        <Route exact path='/Projekty' component={Projects} />
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}


export default Implementation;
