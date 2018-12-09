import React, { PureComponent } from 'react';
import Heart from '../../backgroundElements/heart_mission_section.png'

class Slider2 extends PureComponent {
    constructor(props){
        super()
        this.state={
            slideNumber:1
        }
        this.initialPosition=0
        this.currentPosition=0
        this.endPosition=0
        this.sliderWidth=0

    }
    componentWillUpdate(){
        if(this.state.slideNumber===2) {
            if (document.querySelector('.slide1').style.paddingRight !== '2.8vw') {
                document.querySelector('.slide1').style.paddingRight = '2.8vw'
            }
        }
}
    componentDidUpdate(){
        setTimeout(()=> {
            if(this.state.slideNumber===2){
                document.querySelector('.slide1').style.position='absolute'
                document.querySelector('.slide1').style.top='-100%'
                document.querySelector('.slide2').style.top='0'


            }
            if(this.state.slideNumber===1){
                document.querySelector('.slide2').style.top='-100%'
                document.querySelector('.slide1').style.top='0'
            }
            document.querySelector('.slide1').classList.remove('slider-animation')
            document.querySelector('.slide2').classList.remove('slider-animation')
        },1000)
    }
    changeSlide(){
        console.log(document.querySelectorAll('.slider')[0].getBoundingClientRect().height)
        document.querySelector('.slide1').classList.add('slider-animation')
        document.querySelector('.slide2').classList.add('slider-animation')
        if(this.state.slideNumber===1){
            setTimeout(()=>{
                document.querySelector('.mission').innerHTML='02 WIZJA'
                document.querySelector('.vision').innerHTML='01 MISJA'

            },1000)
            this.setState({
                slideNumber:2
            })
        }else if(this.state.slideNumber===2){
            setTimeout(()=>{
                document.querySelector('.mission').innerHTML='01 MISJA'
                document.querySelector('.vision').innerHTML='02 WIZJA'

            },1000)
            this.setState({
                slideNumber:1
            })
        }
    }

    render() {
            return (
                <div>
                    <div className="slider-container container p-0 col-8 offset-2 " id="mission">
                        <div className="row slider pb-0">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12 slide1">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi aut dolorum expedita maiores minus nihil, officia officiis rem sapiente? Beatae delectus deleniti, dicta dolorum est, eum incidunt laboriosam quasi rem sed tempora temporibus tenetur, voluptates. Consectetur culpa nulla quia vel? Autem cum dicta distinctio dolorem inventore. Debitis ducimus illum optio perferendis quidem reprehenderit, voluptate.
                                        </p>
                                    </div>
                                    <div className="col-12 slide2">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam, aspernatur blanditiis culpa dolorum eum, ex incidunt itaque, maiores perspiciatis quae qui repellat rerum vitae!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div></div>
                                <div>
                                    <p className="mission">01  MISJA</p>
                                    <p className="vision">02 WIZJA</p>
                                </div>
                                <div onClick={()=>this.changeSlide()}>
                                    <span onClick={()=>this.changeSlide()}>
                                        >
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-heart row">
                        <div className="offset-8 col-1">
                            <img src={Heart}/>
                        </div>
                    </div>
                </div>
            )
        }
}


export default Slider2;