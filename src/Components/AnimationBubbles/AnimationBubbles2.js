import React, {PureComponent} from 'react'
import {Transition} from 'react-transition-group'
import Background2 from '../../backgroundElements/bubbles2.png'

// this same as animation bubbles but z index other
class AnimationBubbles2 extends PureComponent  {
    componentDidUpdate(){
        if(window.innerWidth>768){
            document.querySelector('.bubbles-img-2').setAttribute('src',`${Background2}`)
            document.querySelector('.bubbles-img-2').style.display="block"
        }else{
            document.querySelector('.bubbles-img-2').style.display="none"
        }
    }
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
                                 top:-2*this.props.siteMaxHeight,
                                 width:'100%'
                             }}
                    >
                        <div className="container pr-0">
                            <div className="row mr-0">
                                <div className="col-12 bubbles-parent pr-0 bubbles-parent-2">
                                    <img className="bubbles-img-2" />
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