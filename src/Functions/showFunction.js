const showFunction = (element) =>{
    if(window.innerHeight+window.scrollY>element.offsetTop){
        if(!element.classList.contains('show-component')){
            element.classList.add('show-component')
        }
    }
}
export default showFunction