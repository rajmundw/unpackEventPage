import React from 'react'
import Rise from '../../backgroundElements/rise_body.png'
import Sansara from '../../backgroundElements/sansara_group.png'
import SansaraBackground from '../../backgroundElements/sansara_group_background.png'

const sansaraGroup = () => {


        return(
            <section className='sansara-group' id="sansara-group">
                <div className="container">
                    <div className="row">
                        <div className="
                        img-rise-body
                        col-9 col-sm-6 col-md-6 col-lg-6 col-xl-6
                        offset-lg-0 offset-xl-0 offset-md-0  offset-sm-1
                        order-md-1 order-lg-1 order-xl-1">
                            <img src={Rise}  />
                        </div>

                        <div className="
                        img-sansara-body
                        col-7 col-sm-6  col-md-6 col-lg-6 col-xl-6
                        offset-lg-0 offset-xl-0 offset-md-0  offset-sm-5 offset-5
                        order-md-3 order-lg-3 order-xl-3">
                            <img src={Sansara}/>
                        </div>

                        <div className="
                        col-10 col-md-6 col-lg-6 col-xl-6
                        offset-lg-0 offset-xl-0 offset-md-0 offset-1
                        order-md-2 order-lg-2 order-xl-2">

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores aut consequatur dignissimos, dolore doloremque dolores ducimus est eum exercitationem facere fuga harum illo illum labore magnam modi nesciunt nobis odio, omnis quae vero voluptatibus! Delectus deserunt illum neque, provident ratione reiciendis sint voluptatem? Doloribus.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa facere ipsam, non quia quod totam. Consequatur est nihil recusandae totam.
                                <img src={SansaraBackground} />
                            </p>
                            <p>
                                <div className='row'>
                                    <div className="col-10 pr-0 ">
                                        <span className="col-12 pr-0 pl-0">
                                            <span >DYREKTOR KREATYWNY </span>
                                            <span>______</span>
                                            <span >MAŁGORZATA MAŃKOWSKA:</span>
                                        </span>
                                    </div>
                                    <div className='col-2  pl-0 d-flex justify-content-end '><button>CHECK</button></div>
                                </div>
                            </p>
                            <p>
                                <div className='row'>
                                    <div className="col-10 pr-0 ">
                                        <span className="col-12 pr-0 pl-0">
                                            <span >DYREKTOR OPERACYJNY </span>
                                            <span>____________</span>
                                            <span >KATARZYNA HĄCIA:</span>
                                        </span>
                                    </div>
                                    <div className='col-2  pl-0 d-flex justify-content-end '><button>CHECK</button></div>
                                </div>
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        )
}

export default sansaraGroup