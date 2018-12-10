import React, { PureComponent } from 'react';
import Heart from '../../backgroundElements/heart_mission_section.png'

class Slider extends PureComponent {
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


    componentDidMount(){
            const el = document.querySelector('.slide-1')
            const el2 = document.querySelector('.slide-2')

        //slider width to get to know 50% width to changing active slide
            this.sliderWidth = document.querySelectorAll('.slide-1')[0].clientWidth
            document.querySelector('.mission').classList.add('active')

        // on risize updateing slider width
        window.addEventListener('resize',()=>{
            this.sliderWidth = document.querySelectorAll('.slide-1')[0].clientWidth
        })


        //add on touch start event
            el.addEventListener("touchstart", (event) => {
                this.initialPosition = event.changedTouches[0].clientX
            })
            el2.addEventListener("touchstart", (event) => {
                this.initialPosition = event.changedTouches[0].clientX
            })

        // add event to movment simulation
            el.addEventListener('touchmove', (event) => {
                console.log(event.changedTouches[0].clientX)
                if (this.initialPosition - event.changedTouches[0].clientX < 0) {
                    el.style.transform = `translateX(${event.changedTouches[0].clientX - this.initialPosition}px)`
                    el2.style.transform = `translateX(${event.changedTouches[0].clientX - this.initialPosition}px)`
                }
            })
            el2.addEventListener('touchmove', (event) => {
                console.log(this.initialPosition)
                if (this.initialPosition > event.changedTouches[0].clientX) {
                    el.style.transform = `translateX(${this.sliderWidth - (this.initialPosition - event.changedTouches[0].clientX)}px)`
                    el2.style.transform = `translateX(${this.sliderWidth - (this.initialPosition - event.changedTouches[0].clientX)}px)`
                }
            })

        // add event to touch end to get to know that actvie slide has to changed

            el.addEventListener("touchend", (event) => {
                this.endPosition = event.changedTouches[0].clientX
                console.log(Math.abs(this.initialPosition - this.endPosition), 'aaaa')
                if (this.endPosition - this.initialPosition > 0.5 * this.sliderWidth) {
                    el2.style.transform = `translateX(${this.sliderWidth}px)`
                    el.style.transform = `translateX(${this.sliderWidth}px)`
                    document.querySelector('.mission').classList.remove('active')
                    document.querySelector('.vision').classList.add('active')

                } else {
                    console.log('this')
                    el.style.transform = `translateX(0px)`
                    el2.style.transform = `translateX(0px)`
                    console.log(el)
                }
            })
            el2.addEventListener("touchend", (event) => {
                this.endPosition = event.changedTouches[0].clientX
                if (this.initialPosition - this.endPosition > 0.5 * this.sliderWidth) {
                    if (this.initialPosition - this.currentPosition > 0) {
                        el2.style.transform = `translateX(${0}px)`
                        el.style.transform = `translateX(${0}px)`
                        document.querySelector('.mission').classList.add('active')
                        document.querySelector('.vision').classList.remove('active')
                    }
                } else {
                    el.style.transform = `translateX(${this.sliderWidth}px)`
                    el2.style.transform = `translateX(${this.sliderWidth}px)`
                    console.log(el)
                }
            })
    }

    render() {
            return (
                <div className="slider container p-0 " id="mission">
                    <div className="row">
                    <span className="col-12">
                        <span className='col-6 mission'>01 Misja</span>
                        <span className='col-6 vision'>02 Wizja</span>
                    </span>
                    </div>
                    <div className='row'>
                        <div className="col-8 offset-2 pl-0 pr-0">
                            <div className='slide-1 col-12 '>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque commodi
                                    dolores ducimus ipsam libero magnam, modi nam repellat temporibus.</p>
                            </div>
                            <div className='col-12 slide-2'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ipsum non saepe
                                    totam? Atque consequatur dolorum, modi mollitia veniam voluptatibus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-9 col-1">
                            <img src={Heart}/>
                        </div>
                    </div>
                </div>
            )
    }
}


export default Slider;
