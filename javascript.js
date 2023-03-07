const buttons = document.querySelectorAll("button")
const display = document.querySelector("#display")

let inputValue1 = ""
let inputValue2 = ""
let option = ""

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (option === "") {
            inputValue1 += button.id
            display.textContent = inputValue1
        } else {
            inputValue2 += button.id
            display.textContent = inputValue2

        }

        if (option !== "result") {
            option += button.className
            display.textContent = ""
            console.log(inputValue1)
        }
         else {
            console.log (inputValue2)
         }
        
        switch (option) {
        case "add":
        display.textContent = (parseInt(inputValue1) + parseInt(inputValue2))
        console.log (parseInt(inputValue1) + parseInt(inputValue2))
        break;
        case "substract":
        display.textContent = (parseInt(inputValue1) - parseInt(inputValue2))
        console.log (parseInt(inputValue1) - parseInt(inputValue2))
        break;
        case "divide":
        display.textContent = (parseInt(inputValue1) / parseInt(inputValue2))
        console.log (parseInt(inputValue1) / parseInt(inputValue2))
        break;
        case "multiply":
        display.textContent = (parseInt(inputValue1) * parseInt(inputValue2))
        console.log (parseInt(inputValue1) * parseInt(inputValue2))
        }


    })



});