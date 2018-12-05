import React, { PureComponent } from 'react';
import {NavLink} from 'react-router-dom'
class Projects extends PureComponent {


    render() {

        return (
            <div className="projects container p-0">
                <div className='row ml-0 mr-0'>
                    <div className="col-12 ">
                        Projekty
                    </div>
                    <NavLink to="/"><button>Zamknij</button></NavLink>
                </div>
            </div>
        )
    }
}


export default Projects;