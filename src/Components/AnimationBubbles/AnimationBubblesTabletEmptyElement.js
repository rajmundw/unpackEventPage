import React, {PureComponent} from 'react'
import {Transition} from 'react-transition-group'

class AnimationBubblesTabletEmptyElement extends PureComponent  {
    render(){
        console.log('tablet bubbles')
        return(
            <div className="b">
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
                                 top:-2*this.props.siteMaxHeight
                             }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-12 bubbles-parent bubbles-parent-2"></div>
                            </div>
                        </div>
                    </section>
                </Transition>
            </div>
        )
    }
}

export default AnimationBubblesTabletEmptyElement