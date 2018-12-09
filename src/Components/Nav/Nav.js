import React, {PureComponent} from 'react'
import MenuList from '../MenuList/MenuList'
class Nav extends PureComponent  {
    constructor(props){
        super(props)
        this.state={
            shouldMenuRender:false,
            menuHeight:0,
            menuWidth:0,
            pageYOffset:window.pageYOffset,
            innerWidth:window.innerWidth,
            topInitialMenuPosition:0
        }
        this.pageYOffset=0
        this.interval=false
        this.setInterval=''
    }

    componentDidMount(){
        const topInitialPosition=document.querySelectorAll('.menu')[0].parentNode.offsetTop

        if(this.state.innerWidth>576 && this.state.innerWidth<=768){
            this.setState({
                shouldMenuRender:true,
                topInitialMenuPosition:topInitialPosition
            })
        }else{
            this.setState({
                topInitialMenuPosition:topInitialPosition
            })
        }

        this.pageYOffset=window.pageYOffset

        window.addEventListener('touchstart',(event)=> {
            if (this.state.shouldMenuRender && !event.target.classList.contains('menu-points')
                && !event.target.classList.contains('menu')
                && !event.target.classList.contains('menu-container')
                && !event.target.classList.contains('bar-menu')
                && event.target.tagName!=="LI"
                && event.target.tagName!=="UL"
                && event.target.tagName!=="A") {

                if (this.state.innerWidth <= 576 ) {
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
            if(this.state.innerWidth<=576 || this.state.innerWidth>768) {
                if (this.state.shouldMenuRender) {
                    this.setState({
                        shouldMenuRender: false
                    })
                    document.querySelector('.menu').style.visibility = 'visible'
                }
            }

            if(document.querySelector('.menu')) {
                let classList = document.querySelector('.menu').classList
                let offset = window.pageYOffset

                if (this.state.topInitialMenuPosition <= offset) {

                    if (!this.interval) {
                        this.interval = true
                        this.setInterval = setInterval(() => {
                            if (this.pageYOffset !== window.pageYOffset) {
                                this.pageYOffset = window.pageYOffset
                            } else {
                                console.log('clear')
                                clearInterval(this.setInterval)
                                this.interval = false

                                document.querySelector('.menu').style.visibility = 'hidden'
                            }

                        }, 1000)
                    }
                    if(document.querySelector('.menu-list') && document.querySelector('.menu-list').classList.contains('menu-list-white')){
                        document.querySelector('.menu-list').classList.remove('menu-list-white')
                    }


                    if (!classList.contains('sticky')) {
                        document.querySelector('.menu').classList.add('sticky')
                        if (this.state.innerWidth <= 768) {
                            document.querySelector('.menu').style.backgroundColor = 'black'
                        }
                    }
                    if(this.state.innerWidth<=768 && document.querySelector('.menu').style.backgroundColor !== 'black'){
                        document.querySelector('.menu').style.backgroundColor = 'black'
                    }
                }
                if (document.querySelector('.menu').style.visibility !== 'visible') {
                    document.querySelector('.menu').style.visibility = 'visible'
                }


                if (this.state.topInitialMenuPosition > offset ) {

                    if(document.querySelector('.menu-list') && !document.querySelector('.menu-list').classList.contains('menu-list-white')){
                        document.querySelector('.menu-list').classList.add('menu-list-white')
                    }

                    clearInterval(this.setInterval)
                    this.interval=false
                    document.querySelector('.menu').classList.remove('sticky')
                    document.querySelector('.menu').style.backgroundColor = 'transparent'

                }
            }
        })
    }

    showMenu(event){
        console.log(event.target.parentElement.getBoundingClientRect())
        clearInterval(this.setInterval)
        this.interval = false
        document.querySelector('.menu').style.visibility = 'visible'
        console.log(event.target.parentElement.getBoundingClientRect())
        if(!this.state.shouldMenuRender){
            this.setState({
                shouldMenuRender:true,
                menuHeight:event.target.parentElement.getBoundingClientRect().height,
                menuWidth:event.target.parentElement.getBoundingClientRect().width
            })
        }

        if(this.state.shouldMenuRender){
            if (this.state.topInitialMenuPosition <= window.pageYOffset ){
                this.interval = true
                this.setInterval = setInterval(() => {
                    if (this.pageYOffset !== window.pageYOffset) {
                        this.pageYOffset = window.pageYOffset
                    } else {
                        console.log('clear')
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

        console.log(this.state)

        let offset = window.pageYOffset
        if(this.state.innerWidth<=576) {
            if (this.state.topInitialMenuPosition <= offset && !document.querySelector('.menu').classList.contains('sticky')) {

                document.querySelector('.menu').classList.add('sticky')
            }
            if (document.querySelector('.menu-points')) {
                document.querySelector('.menu-points').style.position = 'fixed'
                document.querySelector('.menu-points').style.top = `${this.state.bottomMenuPosition}px`
            }
        }else if(this.state.innerWidth>768) {
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

        if(this.state.shouldMenuRender) {
            console.log('true')
            if (this.state.innerWidth<=576) {
                return (
                    <nav className='menu'>
                        <div onClick={(event) => this.showMenu(event)} className=' menu-container'>
                            <div className="bar-menu"></div>
                            <div className="bar-menu"></div>
                            <div className="bar-menu"></div>
                        </div>
                        <div className="menu-points">
                            <MenuList/>
                        </div>
                    </nav>
                )
            }else if(this.state.innerWidth>576 && this.state.innerWidth<=768 ){
                console.log('tablet')
                return (
                    <nav className='menu'>
                        <div className="menu-points">
                            <MenuList/>
                        </div>
                    </nav>)
            }else{
                return (
                    <nav onClick={(event) => this.showMenu(event)} className='menu'>
                        <div className=' menu-container'>
                            <div className="bar-menu"></div>
                            <div className="bar-menu"></div>
                            <div className="bar-menu"></div>
                        </div>
                        <div className="menu-points   menu-laptop-layout-animation">
                            <MenuList/>
                        </div>
                    </nav>
                )
            }
        }else {
            console.log('false')
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
