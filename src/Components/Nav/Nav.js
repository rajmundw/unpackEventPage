import React, {PureComponent} from 'react'
import MenuList from '../MenuList/MenuList'
class Nav extends PureComponent  {
    constructor(props){
        super(props)
        this.state={
            shouldMenuRender:false,
            bottomMenuPosition:0,
            pageYOffset:window.pageYOffset
        }
        this.pageYOffset=0
        this.interval=false
        this.setInterval=''
    }

    componentDidMount(){
        this.pageYOffset=window.pageYOffset
        console.log(window)

        window.addEventListener('touchstart',(event)=> {
            if (this.state.shouldMenuRender && !event.target.classList.contains('menu-points')
                && !event.target.classList.contains('menu')
                && !event.target.classList.contains('menu-container')
                && !event.target.classList.contains('bar-menu')
                && event.target.tagName!=="LI"
                && event.target.tagName!=="UL"
                && event.target.tagName!=="A") {
                if (window.innerWidth * 0.16 <= window.pageYOffset ) {

                    document.querySelector('.menu').style.visibility = 'hidden'
                }
                    this.setState({
                        shouldMenuRender: false,
                    })
                }
        })

        window.addEventListener('scroll',()=>{

            if(this.state.shouldMenuRender){
                this.setState({
                    shouldMenuRender:false
                })
                document.querySelector('.menu').style.visibility = 'visible'
            }

            if(document.querySelector('.menu')) {
                let classList = document.querySelector('.menu').classList
                let offset = window.pageYOffset

                if (window.innerWidth * 0.16 <= offset) {

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

                }
                if (document.querySelector('.menu').style.visibility !== 'visible') {
                    document.querySelector('.menu').style.visibility = 'visible'
                }

                if (!classList.contains('sticky')) {
                    document.querySelector('.menu').classList.add('sticky')
                    document.querySelector('.menu').style.backgroundColor = 'black'
                }
                if(document.querySelector('.menu').style.backgroundColor !== 'black'){
                    document.querySelector('.menu').style.backgroundColor = 'black'

                }

                if (window.innerWidth * 0.16 > offset ) {

                    clearInterval(this.setInterval)
                    this.interval=false
                    document.querySelector('.menu').classList.remove('sticky')
                    document.querySelector('.menu').style.backgroundColor = 'transparent'

                }
            }
        })
    }

    showMenu(event){
        clearInterval(this.setInterval)
        this.interval = false
        document.querySelector('.menu').style.visibility = 'visible'
        if(event.target.parentElement.classList.contains('menu-container') && !this.state.shouldMenuRender){
            this.setState({
                shouldMenuRender:true,
                bottomMenuPosition:event.target.parentElement.getBoundingClientRect().bottom
            })
        }

        if(this.state.shouldMenuRender){
            if (window.innerWidth * 0.16 <= window.pageYOffset ){
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


        let offset = window.pageYOffset
        if (window.innerWidth * 0.16 <= offset && !document.querySelector('.menu').classList.contains('sticky')) {

            document.querySelector('.menu').classList.add('sticky')
        }
        if(document.querySelector('.menu-points')) {
            document.querySelector('.menu-points').style.position = 'fixed'
            document.querySelector('.menu-points').style.top = `${this.state.bottomMenuPosition}px`
        }
    }

    render(){
        console.log(this.state.shouldMenuRender)
            if(this.state.shouldMenuRender){
                return(
                    <nav className='menu'>
                        <div onClick={(event)=>this.showMenu(event)} className=' menu-container'>
                            <div className="bar-menu"></div>
                            <div className="bar-menu"></div>
                            <div className="bar-menu"></div>
                        </div>
                        <div className="menu-points">
                            <MenuList/>
                        </div>
                    </nav>
                )
            }else {
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