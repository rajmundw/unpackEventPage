import React, { Component } from 'react';
import RestofLayout from '../Containers/RestOfLayout/RestOfLayout'

import InitialLayout from './Layout/InitialLayout'

class App extends Component {
    constructor(props){
        super()
        this.state={
            unpackedEvent:false,
        }
        this.maxWidth=''
    }

    componentDidUpdate(){
        if(this.state.unpackedEvent){

        }
    }

    renderRestOfPage(){
        this.setState({
        unpackedEvent:true
        })
    }
    render() {
        if (this.state.unpackedEvent) {
            return (
                <div className="App container p-0">
                    <InitialLayout renderRestOfPage={()=>this.renderRestOfPage()} />
                    <RestofLayout />
                </div>
            )
        } else {
            return (
                <div className="App container p-0">
                    <InitialLayout renderRestOfPage={()=>this.renderRestOfPage()}/>
                </div>
            )
        }
    }
}


export default App;
