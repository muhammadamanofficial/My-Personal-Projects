const hamburger = document.querySelector(".hamburger-menu")
const navbar = document.querySelector("#mobile-version")
const cross = document.querySelector(".cross")

hamburger.addEventListener('click', () =>{
    navbar.style.right = "8px"
    console.log("hello")
})
cross.addEventListener('click', () =>{
    navbar.style.right = "-370px"
})