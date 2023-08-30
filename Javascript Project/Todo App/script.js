const checkboxList = document.querySelectorAll(".checkboxs")
const inputs = document.querySelectorAll(".input_fields")
const error = document.querySelector(".error")
const progressBar = document.querySelector(".inner_bar")
const resetBtn = document.querySelector('.reset_btn')
const quot = document.querySelector('.footer_quote')
const inputContainer = document.querySelector('.inputs_container')
const newTaskBtn = document.querySelector('.newtaskbtn')

const todoData = JSON.parse(localStorage.getItem('todoData')) || {}

const todoValues = Object.values(todoData)

let lengthvalue = Object.values(todoData).filter((goal) => goal.completed).length

progressBar.style.width = `${lengthvalue / inputs.length * 100}%`
progressBar.lastElementChild.innerText = `${lengthvalue}/${inputs.length} Completed`
checkboxList.forEach((checkboxs) => {
    checkboxs.addEventListener('click', () => {
        const inputfilled = [...inputs].every((input) => {
            return input.value
        })
        if (inputfilled) {
            checkboxs.parentElement.classList.toggle('goals_box')
            const inputsId = checkboxs.nextElementSibling.id
            todoData[inputsId].completed = !todoData[inputsId].completed
            lengthvalue = Object.values(todoData).filter((goal) => goal.completed).length
            progressBar.style.width = `${lengthvalue / inputs.length * 100}%`
            progressBar.lastElementChild.innerText = `${lengthvalue}/${inputs.length} Completed`
            localStorage.setItem('todoData', JSON.stringify(todoData))
        }
        else {
            error.classList.add('error_detect')
            error.innerText = `Please set all the ${inputs.length} goals!`
        }
    })
})
inputs.forEach((input) => {
    resetBtn.addEventListener('click', () =>{
        localStorage.removeItem('todoData')
        location.reload()
    })
    if (todoData[input.id]) {
        input.value = todoData[input.id].name
    }
    if (todoData[input.id] && todoData[input.id].completed) {
        input.parentElement.classList.add('goals_box')
    }
    input.addEventListener('focus', () => {
        error.classList.remove('error_detect')
    })
    input.addEventListener('input', (e) => {
        if (todoData[input.id] && todoData[input.id].completed) {
            return input.value = todoData[input.id].name
        }
        if (todoData[input.id]) {
            todoData[input.id].name = input.value
        }
        else {
            todoData[input.id] = {
                name: input.value,
                completed: false
            }
        }
        localStorage.setItem('todoData', JSON.stringify(todoData))
    })
})
