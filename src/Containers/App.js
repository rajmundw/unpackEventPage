import React, { Component } from 'react';
import RestofLayout from '../Containers/RestOfLayout/RestOfLayout'

import InitialLayout from './Layout/InitialLayout'

class App extends Component {
    constructor(props){
        super()
        this.state={
            unpackedEvent:true,
        }
        this.maxWidth=''
    }
    componentDidMount(){
        window.innerWidth=400
         this.maxWidth=document.getElementsByTagName('body')[0].clientWidth
        document.getElementsByTagName('body')[0].style.width=`${this.maxWidth}px`
        console.log(document.getElementsByTagName('body'))
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
