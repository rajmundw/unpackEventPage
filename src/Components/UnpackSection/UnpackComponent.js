import React, {PureComponent} from 'react'
import pack from "../../backgroundElements/box2.png"

class UnpackComponent extends PureComponent  {
    constructor(props){
        super()
}


    render(){
        return(
            <section>
                <div className="container unpack-container">
                    <div className="row unpack">
                        <div className="col-12">
                            <div>GET THIS SPECIAL FEELING</div>
                            <div className="unpack-div">UNPACK YOUR EVENT</div>
                            <div>
                                <div onClick={this.props.unpackEvent} className="start-collaboration" >ZACZNIJ WSPOLPRACE</div>
                            </div>
                            <div className="pack">
                                    <img src={pack}/>>
                            </div>
                            <span className=" transparent scroll-to-unpack">SCROLL TO UNPACK</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default UnpackComponent