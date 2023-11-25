function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }
function operate(o, a, b) {
    switch (o) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

const digits = document.querySelector('.digits');
const operators = document.querySelector('.operators');
const display = document.querySelector('.display');

digits.querySelectorAll('button').forEach(
    (button) => button.
        addEventListener('click', numberUpdate(button.innerText))
);

operators.querySelectorAll('button').forEach(
    (button) => {
        if (button.innerText === '=') {

        } else {
            button.addEventListener('click',)
        }
    }
)

let total = '';
let displayValue = '';
let lastOperation = '';

function numberUpdate(val) {
    displayValue += val;
}

function operatorUpdate(val) {
    if (val == '=' && lastOperation != '') {
        total = operate(lastOperation, total, displayValue);
        lastOperation = '';
    }
    else if (val == 'C') {
        total = 0;
        lastOperation = '';
    }
    else if (lastOperation != '') {
        total = operate(lastOperation, total, displayValue);
        
        lastOperation = val;
    }
    else {
        lastOperation = val;
        total = displayValue;
    }
    displayValue = '';
}
// values maybe be look like
// {'9','+','1'}

//when operator pressed calculate using total and displayValue
//store value in total