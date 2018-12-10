import React, {PureComponent} from 'react'
import MenuList from '../MenuList/MenuList'
class Nav extends PureComponent  {
    constructor(props){
        super(props)
        this.state={
            //decided that menu has to be render or nor
            shouldMenuRender:false,
            // to stikcy menu
            topInitialMenuPosition:0,
            //to render menu under burger menu
            menuBottomPosition:0,
            // to resize event
            innerWidth:window.innerWidth,
            menuHeight:0,
            menuWidth:0,
            //to get to know when menu has to become sticky
            pageYOffset:window.pageYOffset,
        }

        this.pageYOffset=0
       //said that interval is set or not
        this.interval=false
       // interval name
        this.setInterval=''
    }

    componentDidMount(){
        let topInitialPosition=document.querySelectorAll('.menu')[0].parentNode.offsetTop
        this.pageYOffset=window.pageYOffset

        if(this.state.innerWidth>576 && this.state.innerWidth<=768){
            //tablet layout menu always is render
            this.setState({
                shouldMenuRender:true,
                topInitialMenuPosition:topInitialPosition
            })
        }else{
            //red initial menu position to stikcy menu
            this.setState({
                topInitialMenuPosition:topInitialPosition
            })
        }

        window.addEventListener('resize', ()=>{
            let topInitialPosition=document.querySelectorAll('.menu')[0].parentNode.offsetTop

            this.setState({
                //top menu position on resize browser is changing so set state
                topInitialMenuPosition:topInitialPosition,
                // get to know current inner width
                innerWidth:window.innerWidth,
                //menu is hidden durgin resizing
                shouldMenuRender:false,
            })
        })
        window.addEventListener('touchstart',(event)=> {
            //if menu is rendered and click out of menu element it will become hidden
            if (this.state.shouldMenuRender && !event.target.classList.contains('menu-points')
                && !event.target.classList.contains('menu')
                && !event.target.classList.contains('menu-container')
                && !event.target.classList.contains('bar-menu')
                && event.target.tagName!=="LI"
                && event.target.tagName!=="UL"
                && event.target.tagName!=="A") {

                if (this.state.innerWidth <= 576 ) {
                    //if scroll width is bigger then initial menu offset menu bacoe hidden
                    if (this.state.topInitialMenuPosition <= window.pageYOffset) {
                        document.querySelector('.menu').style.visibility = 'hidden'
                    }
                    //unmount component
                    this.setState({
                        shouldMenuRender: false,
                    })
                }
            }
        })
        //this same taht above but for laptop layout
        window.addEventListener('click',(event)=>{
                if (this.state.shouldMenuRender && !event.target.classList.contains('menu-points')
                    && !event.target.classList.contains('menu')
                    && !event.target.classList.contains('menu-container')
                    && !event.target.classList.contains('bar-menu')
                    && event.target.tagName!=="LI"
                    && event.target.tagName!=="UL"
                    && event.target.tagName!=="A") {

                    if (this.state.innerWidth>768) {
                        if (this.state.topInitialMenuPosition <= window.pageYOffset) {
                            console.log('touchstart')
                            document.querySelector('.menu').style.visibility = 'hidden'
                        }
                        this.setState({
                            shouldMenuRender: false,
                        })
                    }
                }
        })

        window.addEventListener('scroll',()=>{
            //on scroll menu points are unmoujnting for mobile and laptop layout
            if(this.state.innerWidth<=576 || this.state.innerWidth>768) {
                if (this.state.shouldMenuRender) {
                    this.setState({
                        shouldMenuRender: false
                    })
                    //menu becomes visible during scrolling
                    document.querySelector('.menu').style.visibility = 'visible'
                }
            }

            if(document.querySelector('.menu')) {
                //if menu exists make variables class list menu and page offset
                let classList = document.querySelector('.menu').classList
                let offset = window.pageYOffset

                //during sticky menu
                if (this.state.topInitialMenuPosition <= offset) {
                    //if interval is not set
                    if (!this.interval) {
                        //set interval
                        this.interval = true
                        this.setInterval = setInterval(() => {

                            //if offset value is other then offset value afrer interval time interval still is set
                            if (this.pageYOffset !== window.pageYOffset) {
                                this.pageYOffset = window.pageYOffset
                            } else {
                                //else clear interval
                                clearInterval(this.setInterval)
                                this.interval = false
                                //menu becomes hidden
                                document.querySelector('.menu').style.visibility = 'hidden'
                            }

                        }, 1000)
                    }
                    if(document.querySelector('.menu-list') && document.querySelector('.menu-list').classList.contains('menu-list-white')){
                        //if menu have white list class remove it to become a black (when menu is sticky)
                        document.querySelector('.menu-list').classList.remove('menu-list-white')
                    }


                    if (!classList.contains('sticky')) {
                        // add sticky class if menu hasn't this class
                        document.querySelector('.menu').classList.add('sticky')
                        if (this.state.innerWidth <= 768) {
                            //for mobile and tablet layout menu background during sticky menu set on black
                            document.querySelector('.menu').style.backgroundColor = 'black'
                        }
                    }
                    if(this.state.innerWidth<=768 && document.querySelector('.menu').style.backgroundColor !== 'black'){
                        //for laptop layout menu background is not black
                        document.querySelector('.menu').style.backgroundColor = 'black'
                    }
                }
                //make menu visivle if is hidden
                if (document.querySelector('.menu').style.visibility !== 'visible') {
                    document.querySelector('.menu').style.visibility = 'visible'
                }


                if (this.state.topInitialMenuPosition > offset ) {

                    if(document.querySelector('.menu-list') && !document.querySelector('.menu-list').classList.contains('menu-list-white')){
                        //make a menu list background white if is not sticky
                        document.querySelector('.menu-list').classList.add('menu-list-white')
                    }

                    //clear interval
                    clearInterval(this.setInterval)
                    this.interval=false
                    //remove sticky class
                    document.querySelector('.menu').classList.remove('sticky')
                    //make a menu background transparent (burgermenu background)
                    document.querySelector('.menu').style.backgroundColor = 'transparent'

                }
            }
        })
    }

    shouldComponentUpdate(nextProps,nextState){
        //component should update only in this cases
        if(nextState.shouldMenuRender!==this.state.shouldMenuRender ||
            (nextState.innerWidth>768 && this.state.innerWidth<=768) ||
            (nextState.innerWidth<=768 && this.state.innerWidth>768) ||
            (nextState.innerWidth>576 && this.state.innerWidth<=576) ||
            (nextState.innerWidth<=576 && this.state.innerWidth>576) ||
            (nextState.innerWidth>768 && this.state.innerWidth<=576) ||
            (nextState.innerWidth<=576 && this.state.innerWidth>768)
        ){
            if((nextState.innerWidth<=576 && this.state.innerWidth>576) ||
                (nextState.innerWidth>768 && this.state.innerWidth<=768)){
                //make a menu unmount during resizing browser
                this.setState({
                    shouldMenuRender:false
                })
            }
            return true
        }else{
            //else component is not render
            return false
        }
    }

    //show menu on click function
    showMenu(event){

        console.log(event.target.parentElement.getBoundingClientRect())
        //clear interval because  during render menu list menu is visible
        clearInterval(this.setInterval)
        this.interval = false
        //make menu visible
        document.querySelector('.menu').style.visibility = 'visible'
        if(!this.state.shouldMenuRender){
        //set state to render menu list and get to know menu x y size
            this.setState({
                shouldMenuRender:true,
                menuHeight:event.target.parentElement.getBoundingClientRect().height,
                menuWidth:event.target.parentElement.getBoundingClientRect().width,
                menuBottomPosition:event.target.parentElement.getBoundingClientRect().bottom
            })
        }

        if(this.state.shouldMenuRender){
            if (this.state.topInitialMenuPosition <= window.pageYOffset ){
                // if menu list is render and menu is sticky set interval and unmount menu list
                this.interval = true
                this.setInterval = setInterval(() => {
                    if (this.pageYOffset !== window.pageYOffset) {
                        this.pageYOffset = window.pageYOffset
                    } else {
                        clearInterval(this.setInterval)
                        this.interval = false

                        document.querySelector('.menu').style.visibility = 'hidden'
                    }

                }, 1000)
            }
            this.setState({
                shouldMenuRender: false
            })
        }


    }
    componentDidUpdate(){
        // on update read  new initial position beeacuse during resizing it could changed
        let topInitialPosition=document.querySelectorAll('.menu')[0].parentNode.offsetTop
        // read current offset
        let offset = window.pageYOffset

        if(this.state.innerWidth>768 && document.querySelector('.menu').style.backgroundColor == 'black'){
            //on resizing for laptop layout make a menu background transparent
            document.querySelector('.menu').style.backgroundColor = 'transparent'
        }

        if(this.state.innerWidth>576 && this.state.innerWidth<=768){
            //for resizing render menu list for tablet layout
            this.setState({
                shouldMenuRender:true,
                topInitialMenuPosition:topInitialPosition
            })
        }

        if(this.state.innerWidth<=576) {
            //mobile layout making sticky menu and fixed menu points to bottom of burger menu
            if (this.state.topInitialMenuPosition <= offset && !document.querySelector('.menu').classList.contains('sticky')) {

                document.querySelector('.menu').classList.add('sticky')
            }
            if (document.querySelector('.menu-points')) {
                document.querySelector('.menu-points').style.position = 'fixed'
                document.querySelector('.menu-points').style.top = `${this.state.menuBottomPosition}px`
            }
        }else if(this.state.innerWidth>768) {
            //for laptop layout set menu in starting position to start showing animation also making sticky menu
            if (this.state.topInitialMenuPosition <= offset && !document.querySelector('.menu').classList.contains('sticky')) {

                document.querySelector('.menu').classList.add('sticky')
            }

            if (document.querySelector('.menu-points')) {
                document.querySelector('.menu-points').style.position = 'absolute'
                document.querySelector('.menu-points').style.top = `0px`
                document.querySelector('.menu-points').style.marginRight = `${this.state.menuWidth}px`
                document.querySelectorAll('ul')[1].style.height = `${this.state.menuHeight}px`
            }
        }
    }


    render(){

        // if menu list should be render
        if(this.state.shouldMenuRender) {
            //for mobile layout
            if (this.state.innerWidth<=576) {
                return (
                    <nav className='menu'>
                        <div onClick={(event) => this.showMenu(event)} className=' menu-container'>
                            <div className="bar-menu"></div>
                            <div className="bar-menu"></div>
                            <div className="bar-menu"></div>
                        </div>
                        <div className="menu-points">
                            <MenuList topInitialMenuPosition={this.state.topInitialMenuPosition}/>
                        </div>
                    </nav>
                )
            }// for tablet layout without burger menu only menu list
            else if(this.state.innerWidth>576 && this.state.innerWidth<=768 ){
                return (
                    <nav className='menu'>
                        <div className="menu-points">
                            <MenuList topInitialMenuPosition={this.state.topInitialMenuPosition}/>
                        </div>
                    </nav>)
            }// for laptop layout with other animation then mobile layout
            else{
                return (
                    <nav onClick={(event) => this.showMenu(event)} className='menu'>
                        <div className=' menu-container'>
                            <div className="bar-menu"></div>
                            <div className="bar-menu"></div>
                            <div className="bar-menu"></div>
                        </div>
                        <div className="menu-points   menu-laptop-layout-animation">
                            <MenuList topInitialMenuPosition={this.state.topInitialMenuPosition}/>
                        </div>
                    </nav>
                )
            }
        }// if menu list is not render, render burger menu but it is only connected with mobile and laptop layout
        else {
            return(
                <nav className='menu '>
                    <div onClick={(event)=>this.showMenu(event)} className=' hidden menu-container'>
                        <div className="bar-menu"></div>
                        <div className="bar-menu"></div>
                        <div className="bar-menu"></div>
                    </div>
                </nav>
            )
        }

    }
}

export default Nav
