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

    componentDidMount() {
        // if not unpacked event and change browser width check below condition
        window.addEventListener('resize',()=>{
            if (document.querySelector('.initial-layout').clientHeight < window.innerHeight && !this.state.unpackedEvent) {
                document.querySelector('body').style.height = `${window.innerHeight}px`
                console.log(document.querySelector('.initial-layout').clientHeight,'aaa')
            }else if(document.querySelector('.initial-layout').clientHeight> window.innerHeight && !this.state.unpackedEvent) {
                    document.querySelector('body').style.height = `100%`
                }
        },500)

        //set body on full screen if initial layout is smaller
        setTimeout(()=>{
            if (document.querySelector('.initial-layout').clientHeight < window.innerHeight) {
                document.querySelector('body').style.height = `${window.innerHeight}px`
                console.log(document.querySelector('.initial-layout').clientHeight,'aaa')
            }
        },500)
    }

    componentDidUpdate(){
        document.querySelector('body').style.height = `100%`
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
