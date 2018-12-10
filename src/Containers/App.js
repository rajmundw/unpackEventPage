import React, { Component } from 'react';
import RestofLayout from '../Containers/RestOfLayout/RestOfLayout'

import InitialLayout from './Layout/InitialLayout'

class App extends Component {
    constructor(props){
        super()
        this.state={
            // state element which decided that rest of page has to be rendered, initial false
            unpackedEvent:false,
        }
    }

// function on click on "zacznij współpacę" element
    renderRestOfPage(){
        // set state on true and render rest of page
        this.setState({
        unpackedEvent:true
        })
    }

    render() {
        //if unpackedEvent true render initial layout and rest of page
        if (this.state.unpackedEvent) {
            return (
                <div className="App container p-0">
                    <InitialLayout renderRestOfPage={()=>this.renderRestOfPage()} />
                    <RestofLayout />
                </div>
            )
        } //initial layout before unpacked event
        else {
            return (
                <div className="App container p-0">
                    <InitialLayout renderRestOfPage={()=>this.renderRestOfPage()}/>
                </div>
            )
        }
    }
}


export default App;
