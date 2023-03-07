function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

const buttons = document.querySelectorAll("button")
const display = document.querySelector("#display")



buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const inputValue = button.id
        display.textContent = inputValue
    })
});

