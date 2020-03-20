function onScroll () {

    console.log(window.pageYOffset)

    let header = document.getElementById('header')
    let nav = document.getElementById('nav')
    let body = document.getElementById('body')

    if (window.pageYOffset >= 40) {
        
        header.style.height = "150px"
        header.children[1].style.fontSize = "24px"

        nav.style.height = "50px"
        nav.style.top = "150px"
        
        for (i of nav.children[0].children) {
            i.style.height = "35px"
            i.style.lineHeight = "35px"
        }

        body.style.marginTop = "350px"

    }

    else {

        header.style.height = "250px"
        header.children[1].style.fontSize = "35px"

        nav.style.height = "80px"
        nav.style.top = "250px"

        for (i of nav.children[0].children) {
            i.style.height = "50px"
            i.style.lineHeight = "50px"
        }

        body.style.marginTop = "450px"

    }

}