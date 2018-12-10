import React, {PureComponent} from 'react'
import {Transition} from 'react-transition-group'
import Background from '../../backgroundElements/bubbles.png'
import BackgroundTablet from '../../backgroundElements/bubbles-tablet.png'

class AnimationBubbles extends PureComponent  {

    componentDidUpdate(){
        if(window.innerWidth>768){
            document.querySelector('.bubbles-img-1').setAttribute('src',`${Background}`)
        }else{
            document.querySelector('.bubbles-img-1').setAttribute('src',`${BackgroundTablet}`)
        }
    }
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
                    top:-2*this.props.siteMaxHeight,
                    width:'100%'
                }}
                >
                    <div className="container pr-0 pl-0 pr0">
                        <div className="row mr-0">
                            <div className="col-12 bubbles-parent pr-0">
                                <img className="bubbles-img-1" style={{"z-index":2}}/>

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