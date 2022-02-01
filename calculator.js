const output = document.querySelector('#output');
const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.value = number.innerText);
const clearButton = document.querySelector("#clear");
const addButton = document.querySelector("#add");
const divideButton = document.querySelector("#divide")
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const equalsButton = document.querySelector("#equals");
const cancelButton = document.querySelector("#cancel");
const plusorminusButton = document.querySelector("#plusorminus");
let valueOne = 0;
let valueTwo = 0;
let operateValue = "";


numbers.forEach(number => number.addEventListener('click', () => {
    if (operateValue === "") {
    output.textContent += number.value;
    valueOne = parseInt(output.textContent);
}


else {
    output.textContent += number.value;
    valueTwo = parseInt(output.textContent);
}

    if (output.textContent.length > 11) {
        output.textContent = output.textContent.slice(0,11);
    }
    
}));

plusorminusButton.addEventListener('click', () => {
    if (output.textContent == "") {
        output.textContent = "-";
    }

    else if (output.textContent == "-") {
        output.textContent = "";
    }
})





clearButton.addEventListener('click', () => {
    
    output.textContent = "";
    valueOne = "";
    valueTwo = "";
    operateValue = "";
});

cancelButton.addEventListener('click', (e) => {
    output.textContent = output.textContent.slice(0, output.textContent.length -1);

    if (operateValue == "") {
        valueOne = valueOne.slice(0, valueOne.length -1);
    }

    else  {
        valueTwo = valueTwo.slice(0, valueOne.length -1);
    }
 
    
})

addButton.addEventListener('click', (event) => {
    
    output.textContent = '';
    operateValue = "add";  
    
});

divideButton.addEventListener('click', () => {
    output.textContent = '';
    operateValue = "divide";  
});

subtractButton.addEventListener('click', () => {
    output.textContent = '';
    operateValue = "subtract";  
});

multiplyButton.addEventListener('click', () => {
    output.textContent = '';
    operateValue = "multiply";  
});


equalsButton.addEventListener('click', () => {
   


    let toNumberOne = parseInt(valueOne);
    let toNumberTwo = parseInt(valueTwo);
    
   
    result = operate(operateValue, toNumberOne, toNumberTwo);
    output.textContent = result;
    valueOne = parseInt(result);
    valueTwo = parseInt(toNumberTwo);
    
})



function add(x, y) {
    let result = x + y;
    return result;
}

function subtract(x, y) {
    let result = x - y;
    return result;
}

function multiply(x, y) {
    let result = x * y;
    return result;
}

function divide(x, y) {
    let result = x / y;
    return result;
}

function operate(operator, x, y) {
    if (operator == "add") {
        return add(x, y);
    } else if (operator == "subtract") {
        return subtract(x, y);
    } else if (operator == "multiply") {
        return multiply(x, y)
    } else if (operator == "divide") {
       return divide(x, y);
    }
}