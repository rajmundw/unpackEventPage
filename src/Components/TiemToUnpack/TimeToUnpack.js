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
    }
    componentDidMount(){
    this.workComfortDiv=document.querySelectorAll('.work-comfort-row')[0]
    this.saveDiv=document.querySelectorAll('.work-comfort-row')[1]
    this.recignitionDiv=document.querySelectorAll('.work-comfort-row')[2]
    this.countdownDiv=document.querySelectorAll('.work-comfort-row')[3]
    this.enthusiasmDiv=document.querySelectorAll('.work-comfort-row')[4]
    this.succeedDiv=document.querySelectorAll('.work-comfort-row')[5]
        window.addEventListener('scroll',()=>{
            showFunction(this.workComfortDiv)
            showFunction(this.saveDiv)
            showFunction(this.recignitionDiv)
            showFunction(this.countdownDiv)
            showFunction(this.enthusiasmDiv)
            showFunction(this.succeedDiv)
        })
}
    render(){

        return(
            <section className="container time-to-unpack">
                <div className="row">
                    <div className='col-10 offset-1'>
                        TIME TO UNPACK
                    </div>
                    <div className="col-8 offset-2">
                        DECYDUJAC SIE NA WSPOLPRACE Z NAMI, W PAKIECIE OTRZYMASZ NIEZWYKLE PRZEZYCIA, KTORE BEDA CI TOWARZYSZYC NA KAZDYM ETAPIE ORGANIZACJI EVENTU
                    </div>
                </div>

                <div className="row work-comfort-row">
                    <div className="col-5 offset-1">
                        <img className="work-comfort" src={WorkComfort}/>
                    </div>
                    <div className="col-6">
                        <h1>KOMFORT PRACY</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem facilis illum mollitia nobis perferendis porro quibusdam ullam veritatis voluptatem.</p>
                    </div>
                </div>


                <div className="row work-comfort-row">
                    <div className="col-6 offset-1">
                        <h1>BEZPIECZENSTWO</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem facilis illum mollitia nobis perferendis porro quibusdam ullam veritatis voluptatem.</p>
                    </div>
                    <div className="col-5">
                        <img className="work-comfort" src={Save}/>
                    </div>
                </div>


                <div className="row work-comfort-row">
                    <div className="col-5 offset-1">
                        <img className="work-comfort" src={Recgnition}/>
                    </div>
                    <div className="col-6">
                        <h1>UZNANIE</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem facilis illum mollitia nobis perferendis porro quibusdam ullam veritatis voluptatem.</p>
                    </div>
                </div>

                <div className="row work-comfort-row">
                    <div className="col-6 offset-1">
                        <h1>ODLICZANIE</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem facilis illum mollitia nobis perferendis porro quibusdam ullam veritatis voluptatem.</p>
                    </div>
                    <div className="col-5">
                        <img className="work-comfort" src={Countdown}/>
                    </div>
                </div>


                <div className="row work-comfort-row">
                    <div className="col-5 offset-1">
                        <img className="work-comfort" src={Enthusiasm}/>
                    </div>
                    <div className="col-6">
                        <h1>ENTUZJAZM</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem facilis illum mollitia nobis perferendis porro quibusdam ullam veritatis voluptatem.</p>
                    </div>
                </div>

                <div className="row work-comfort-row">
                    <div className="col-6 offset-1">
                        <h1>SUKCES</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem facilis illum mollitia nobis perferendis porro quibusdam ullam veritatis voluptatem.</p>
                    </div>
                    <div className="col-5 ">
                        <img className="work-comfort" src={Succeed}/>
                    </div>
                </div>

            </section>
        )
    }
}

export default TimeToUnpack