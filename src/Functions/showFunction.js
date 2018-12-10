const showFunction = (element,restOfLayoutOffset) => {

    // for laptop layout
    if (window.innerWidth > 768) {
        //if scrollY value and initial page height is bigger then element top offset add animation
        if (window.innerHeight + window.scrollY > element.offsetTop+restOfLayoutOffset) {
            if (!element.classList.contains('show-component')) {
                element.classList.add('show-component')
            }
        }
    } else
        // this ame for mobile/tablet layout but other offset value
        {
        if (window.innerHeight + window.scrollY > element.offsetTop) {
            if (!element.classList.contains('show-component')) {
                element.classList.add('show-component')
            }
        }
    }
}

export default showFunction