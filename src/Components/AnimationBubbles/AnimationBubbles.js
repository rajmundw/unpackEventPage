import React, {PureComponent} from 'react'
import {Transition} from 'react-transition-group'
import Background from '../../backgroundElements/bubbles.png'
class AnimationBubbles extends PureComponent  {
    render(){

        console.log(this.props.shouldAnimated,'props', this.props.siteMaxHeight,'aaa')
        return(
            <div className="a">
            <Transition
                in={this.props.shouldAnimated}
                timeout={8000}
                unmountOnExit
                mouseOnEnter

            >
                <section id='bubbles-animation1' className="bubbles"
                style={{
                    height:this.props.siteMaxHeight,
                    position:'relative',
                    top:-2*this.props.siteMaxHeight
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

export default AnimationBubbles