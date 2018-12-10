import React, { PureComponent } from 'react';
import showFunction from "../../Functions/showFunction"
import WorkComfort from '../../backgroundElements/work_comfort.png'
import Save from '../../backgroundElements/save.png'
import Recgnition from '../../backgroundElements/recognition.png'
import Countdown from '../../backgroundElements/countdown.png'
import Enthusiasm from '../../backgroundElements/enthusiasm.png'
import Succeed from '../../backgroundElements/succeed.png'






class TimeToUnpack extends PureComponent {
    constructor(props) {
        super()
        this.state = {}
        this.workComfortDiv=''
        this.saveDiv=''
        this.recignitionDiv=''
        this.countdownDiv=''
        this.enthusiasmDiv=''
        this.succeedDiv=''
        this.restOfLayoutOffset=''
    }
    componentDidMount(){

        // animation elemets
    this.workComfortDiv=document.querySelectorAll('.work-comfort-row')[0]
    this.saveDiv=document.querySelectorAll('.work-comfort-row')[1]
    this.recignitionDiv=document.querySelectorAll('.work-comfort-row')[2]
    this.countdownDiv=document.querySelectorAll('.work-comfort-row')[3]
    this.enthusiasmDiv=document.querySelectorAll('.work-comfort-row')[4]
    this.succeedDiv=document.querySelectorAll('.work-comfort-row')[5]

        // timeout to load page
        setTimeout(()=>{
         // function on scroll
            window.addEventListener('scroll',()=>{
                showFunction(this.workComfortDiv,this.restOfLayoutOffset)
                showFunction(this.saveDiv,this.restOfLayoutOffset)
                showFunction(this.recignitionDiv,this.restOfLayoutOffset)
                showFunction(this.countdownDiv,this.restOfLayoutOffset)
                showFunction(this.enthusiasmDiv,this.restOfLayoutOffset)
                showFunction(this.succeedDiv,this.restOfLayoutOffset)
            })
        },100)
}
    render(){

        return(
            <section className="container time-to-unpack">
                <div className="row">
                    <div className='col-10 offset-1'>
                        TIME TO UNPACK
                    </div>
                    <div className="col-6 offset-3">
                        DECYDUJAC SIE NA WSPOLPRACE Z NAMI, W PAKIECIE OTRZYMASZ NIEZWYKLE PRZEZYCIA, KTORE BEDA CI TOWARZYSZYC NA KAZDYM ETAPIE ORGANIZACJI EVENTU:
                    </div>
                </div>

                <div className="row work-comfort-row">
                    <div className="
                    col-5 col-xl-3 col-lg-3 col-md-3
                    offset-1">
                        <img className="work-comfort" src={WorkComfort}/>
                    </div>
                    <div className="
                    col-6 col-xl-3 col-lg-3 col-md-3
                    ">
                        <h1>KOMFORT PRACY</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem facilis illum mollitia nobis perferendis porro quibusdam ullam veritatis voluptatem.</p>
                    </div>
                </div>


                <div className="row work-comfort-row">
                    <div className="
                    col-6 col-xl-3 col-lg-3 col-md-3
                    offset-1 offset-xl-4 offset-md-4 offset-lg-4">
                        <h1>BEZPIECZENSTWO</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem facilis illum mollitia nobis perferendis porro quibusdam ullam veritatis voluptatem.</p>
                    </div>
                    <div className="
                    col-5 col-xl-4 col-lg-4 col-md-4">
                        <img className="work-comfort" src={Save}/>
                    </div>
                </div>


                <div className="row work-comfort-row">
                    <div className="
                    col-5 col-xl-2 col-lg-2 col-md-2
                    offset-1">
                        <img className="work-comfort" src={Recgnition}/>
                    </div>
                    <div className="
                    col-6 col-xl-3 col-lg-3 col-md-3">
                        <h1>UZNANIE</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem facilis illum mollitia nobis perferendis porro quibusdam ullam veritatis voluptatem.</p>
                    </div>
                </div>

                <div className="row work-comfort-row">
                    <div className="
                    col-6 col-xl-3 col-md-3 col-lg-3
                    offset-1 offset-xl-0 offset-md-0 offset-lg-0
                    order-xl-2 order-md-2 order-lg-2">
                        <h1>ODLICZANIE</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem facilis illum mollitia nobis perferendis porro quibusdam ullam veritatis voluptatem.</p>
                    </div>
                    <div className="
                    col-5 col-xl-3 col-md-3 col-lg-3
                    offset-xl-5 offset-md-5 offset-lg-5
                    order-xl-1 order-md-1 order-lg-1">
                        <img className="work-comfort" src={Countdown}/>
                    </div>
                </div>


                <div className="row work-comfort-row">
                    <div className="
                    col-5 col-xl-4 col-xl-4 col-md-4 col-lg-4
                     offset-1">
                        <img className="work-comfort" src={Enthusiasm}/>
                    </div>
                    <div className="
                    col-6 col-xl-4 col-md-4 col-lg-4">
                        <h1>ENTUZJAZM</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem facilis illum mollitia nobis perferendis porro quibusdam ullam veritatis voluptatem.</p>
                    </div>
                </div>

                <div className="row work-comfort-row">
                    <div className="
                    col-6 col-xl-3 col-md-3 col-lg-3
                    offset-1 offset-xl-0
                    order-xl-2 order-md-2 order-lg-2">
                        <h1>SUKCES</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem facilis illum mollitia nobis perferendis porro quibusdam ullam veritatis voluptatem.</p>
                    </div>
                    <div className="
                    col-5 col-xl-3 col-md-3 col-lg-3
                    offset-xl-6 offset-lg-6 offset-md-6
                     order-xl-1 order-md-1 order-lg-1">
                        <img className="work-comfort" src={Succeed}/>
                    </div>
                </div>

            </section>
        )
    }
}

export default TimeToUnpack