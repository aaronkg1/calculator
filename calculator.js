const output = document.querySelector('#output');
const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.value = number.innerText);
const clearButton = document.querySelector("#clear");
const addButton = document.querySelector("#add");
const divideButton = document.querySelector("#divide")
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("multiply");
const equalsButton = document.querySelector("equals");
let displayValue;
let numberToAdd;

numbers.forEach(number => number.addEventListener('click', () => {
    output.textContent += number.value;
    displayValue = output.textContent;
}));

clearButton.addEventListener('click', () => {
    
})

addButton.addEventListener('click', () => {
    
})




function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    if (operator == "+") {
        return add(x, y);
    } else if (operator == "-") {
        return subtract(x, y);
    } else if (operator == "*") {
        return multiply(x, y)
    } else if (operator == "/") {
       return divide(x, y);
    }
}