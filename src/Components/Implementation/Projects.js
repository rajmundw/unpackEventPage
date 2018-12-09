import React, { PureComponent } from 'react';
import {NavLink} from 'react-router-dom'
class Projects extends PureComponent {

    closeProjects(){
        document.getElementById('offer').style.marginTop="-8.3vw"
    }
    render() {

        return (
            <div className="projects container p-0">
                <div className='row ml-0 mr-0'>
                    <div className="col-12 ">
                        Projekty
                    </div>
                    <NavLink to="/"><button onClick={this.closeProjects}>Zamknij</button></NavLink>
                </div>
            </div>
        )
    }
}


export default Projects;