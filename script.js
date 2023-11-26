function operate(o, a, b) {
    switch (o) {
        case '+':
            return parseFloat(a) + parseFloat(b);
        case '-':
            return parseFloat(a) - parseFloat(b);
        case '*':
            return parseFloat(a) * parseFloat(b);
        case '/':
            return parseFloat(a) / parseFloat(b);
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
    if(lastOperation == '/' && (displayValue == '' || displayValue == '0')){
        updateDisplay('DIVIDE BY ZERO ERROR');
        return;
    }
    switch (val) {
        case 'C':
            total = 0;
            lastOperation = '';
            displayValue = '';
            updateDisplay(displayValue);
            return;
        case '=':
            if (lastOperation != '') {
                total = operate(lastOperation, total, displayValue);
                displayValue = total;
                lastOperation = '';
                updateDisplay(displayValue);
                clearOnNumberUpdate = true;
            }
            return;
        default:
            if(lastOperation != ''){
                total = operate(lastOperation,total,displayValue);
                displayValue = total;
                lastOperation = val;
                updateDisplay(displayValue);
                clearOnNumberUpdate = true;
            }
            else{
                total = displayValue;
                lastOperation = val;
                updateDisplay(displayValue);
                clearOnNumberUpdate = true;
            }
            return;
    }
}