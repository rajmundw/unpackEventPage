import React, {PureComponent} from 'react'
import {Transition} from 'react-transition-group'
import Background2 from '../../backgroundElements/bubbles2.png'
class AnimationBubbles2 extends PureComponent  {
    render(){
        console.log('bubbles')
        return(
            <div className="b">
                <Transition
                    in={this.props.shouldAnimated}
                    timeout={8000}
                    unmountOnExit
                    mouseOnEnter

                >
                    <section id='bubbles-animation2' className=" bubbles bubbles2"
                             style={{
                                 height:this.props.siteMaxHeight,
                                 position:'relative',
                                 top:-2*this.props.siteMaxHeight
                             }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-12 bubbles-parent bubbles-parent-2">
                                    <img src={Background2}/>
                                </div>
                            </div>
                        </div>
                    </section>
                </Transition>
            </div>
        )
    }
}

export default AnimationBubbles2