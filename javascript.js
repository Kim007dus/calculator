const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll ("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousOperandTextElement = document.querySelector ("[data-previous-operand]")
const currentOperandTextElement = document.querySelector ("[data-current-operand]")


class Calculator {
    constructor (previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement  = currentOperandTextElement
        this.clear ()
    }
}

allClearButton.addEventListener ("click", () => {
console.log (allClearButton.innerHTML)
})


    numberButtons.forEach ((button) => {
        button.addEventListener ("click", () => {
        console.log (button.innerHTML)
        })
    })

    operationButtons.forEach ((button) => {
        button.addEventListener ("click", () => {
            console.log (button.innerHTML)
        })
    })