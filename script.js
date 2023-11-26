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
        addEventListener('click', () => numberUpdate(button.innerText))
);

operators.querySelectorAll('button').forEach(
    (button) =>
        button.addEventListener('click', () => operatorUpdate(button.innerText))
)

var total = '';
var displayValue = '';
var lastOperation = '';

function updateDisplay(val) {
    display.innerText = val;
}

function numberUpdate(val) {
    if (clearOnNumberUpdate) {
        clearOnNumberUpdate = false;
        displayValue = '';
    }
    displayValue += val;
    updateDisplay(displayValue);
}

var clearOnNumberUpdate = false;

function operatorUpdate(val) {
    //clear
    //noop
    //equals
    //equals noop
    if (val == 'C') {
        total = 0;
        lastOperation = '';
        displayValue = '';
        updateDisplay(displayValue);
    }
    else if (lastOperation != '') {
        total = operate(lastOperation, total, displayValue);
        if (val == '=') {
            lastOperation = '';
            displayValue = total;
            total = 0;
            updateDisplay(total);
            clearOnNumberUpdate = true;
            return;
        }
        lastOperation = val;
    }
}
// values maybe be look like
// {'9','+','1'}

//when operator pressed calculate using total and displayValue
//store value in total