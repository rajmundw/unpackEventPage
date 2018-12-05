import React, { PureComponent } from 'react';
import ImplementationBackground from '../../backgroundElements/implementation_background.png'
import Projects from "../Implementation/Projects";
import {BrowserRouter, Route, NavLink} from 'react-router-dom'

class Implementation extends PureComponent {

    render() {

        return (
            <BrowserRouter>
                <div>
                    <div className="implementation container p-0" id="implementation">
                        <div className='row'>
                            <div className="col-10 offset-1">
                                <h1>REALIZACJA</h1>
                                <p>NASZE PROJEKTY ZREALIZOWANE W OSTATNIM CZASIE:</p>
                                <NavLink to="/Projekty"><button>ZOBACZ PROJEKTY</button></NavLink>
                            </div>
                        </div>
                        <div className="row">
                            <img src={ImplementationBackground} />

                        </div>
                    </div>
                    <div className="container p-0">
                        <Route path='/Projekty' component={Projects} />
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}


export default Implementation;
