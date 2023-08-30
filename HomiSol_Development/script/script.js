
const hamburger = document.querySelector(".hamburger-menu")
const navbar = document.querySelector("#mobile-version")
const cross = document.querySelector(".cross")
const btn1 = document.querySelector(".btn1")

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#Location_page'),
//     smooth: true
// });

hamburger.addEventListener('click', () =>{
    gsap.to("#mobile-version", {
       right: 4,
        duration:0.5,
        ease: "expo"
    })
    gsap.from(".navlist, .navbar_buttons .btns",{
        y:-10,
        duration:0.5,
        opacity:0,
        stagger:0.1
    })
})
cross.addEventListener('click', () =>{
    gsap.to("#mobile-version", {
        right: -370,
         duration:0.3
     })
})
// gsap.from(".website_name .name, .navlist, .navbar_buttons .btns",{
//     y:-10,
//     duration:0.5,
//     opacity:0,
//     stagger:0.2
// })
