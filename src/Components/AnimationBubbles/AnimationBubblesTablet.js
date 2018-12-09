import React, {PureComponent} from 'react'
import {Transition} from 'react-transition-group'
import Background from '../../backgroundElements/bubbles-tablet.png'
class AnimationBubblesTablet extends PureComponent  {
    render(){
        console.log('tablet bubbles')
        return(
            <div className="a">
                <Transition
                    in={this.props.shouldAnimated}
                    timeout={8000}
                    unmountOnExit
                    mouseOnEnter

                >
                    <section className="bubbles bubbles-tablet"
                             style={{
                                 height:this.props.siteMaxHeight,
                                 position:'relative',
                                 top:-2*this.props.siteMaxHeight,
                                 width:window.innerWidth
                             }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-12 bubbles-parent">
                                    <img src={Background}/>
                                </div>
                            </div>
                        </div>
                    </section>
                </Transition>
            </div>
        )
    }
}

export default AnimationBubblesTablet