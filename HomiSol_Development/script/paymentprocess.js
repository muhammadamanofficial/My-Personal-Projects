const payments = document.querySelectorAll("input")
if(payments[4].checked === true){
    payments[0].parentElement.style.opacity = "0.5"
            payments[0].parentElement.childNodes[7].style.pointerEvents = "none"
            payments[0].parentElement.childNodes[9].style.pointerEvents = "none"
            payments[4].parentElement.style.opacity = 1
            payments[4].parentElement.childNodes[9].style.pointerEvents = "all"
}
console.log(payments[4].checked === true)
payments.forEach((option)=>{
    option.addEventListener("click", (e) =>{

        if(e.target.value === "credit_card"){
        payments[4].parentElement.style.opacity = 0.5
       payments[4].parentElement.childNodes[9].style.pointerEvents = "none"
       payments[0].parentElement.style.opacity = "1"
        payments[0].parentElement.childNodes[7].style.pointerEvents = "all"
        payments[0].parentElement.childNodes[9].style.pointerEvents = "all"
        }
        else{
            payments[0].parentElement.style.opacity = "0.5"
            payments[0].parentElement.childNodes[7].style.pointerEvents = "none"
            payments[0].parentElement.childNodes[9].style.pointerEvents = "none"
            payments[4].parentElement.style.opacity = 1
            payments[4].parentElement.childNodes[9].style.pointerEvents = "all"
        }
    })
})