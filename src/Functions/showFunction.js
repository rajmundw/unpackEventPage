const showFunction = (element,restOfLayoutOffset) => {
    if (window.innerWidth > 768) {
        if (window.innerHeight + window.scrollY > element.offsetTop+restOfLayoutOffset) {
            if (!element.classList.contains('show-component')) {
                element.classList.add('show-component')
            }
        }
    } else {
        if (window.innerHeight + window.scrollY > element.offsetTop) {
            if (!element.classList.contains('show-component')) {
                element.classList.add('show-component')
            }
        }
    }
}

export default showFunction