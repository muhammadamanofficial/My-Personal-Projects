const confirmPage = document.querySelector("#confirmpage")
const serviceConfirm = document.querySelector("#service_confirm")
if(confirmPage){
setTimeout(function(){
    confirmPage.style.display = "none"
    window.location.href = "../Pages/Service_ProcessPage.html"
}, 4000)
}
console.log(serviceConfirm)
if(serviceConfirm){
setTimeout(function(){
    serviceConfirm.style.display = "none"
    window.location.href = "../Pages/Payment_ProcessPage.html"
}, 4000)
}