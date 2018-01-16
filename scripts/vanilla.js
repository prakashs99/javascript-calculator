var textInput = document.querySelector('#text-input');
var finalAnswer = 0;
var firstOperation = 0;
var runningOperation = -1;
var buttons = document.getElementsByClassName('calculator-button');
var isAnswer = 0;
textInput.value = 0;

for(var i = 0; i < buttons.length; i++) {
    if(buttons[i].value >=0 && buttons[i].value <= 9) {
        buttons[i].addEventListener('click',numberButtonClicked);
    }
}

function numberButtonClicked(e) {
    textInput.focus();
    if(isAnswer === 0) {
        textInput.value = textInput.value + e.target.value;
    }
    else {
        textInput.value = "";
        textInput.value = e.target.value;
        isAnswer = 0;
    }
    textInput.value = Number(textInput.value);
    console.log(textInput.value);
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function mod(a, b) {
    return a % b;
}

function power(a, b) {
    return Math.pow(a, b);
}

function inverse(a) {
    return 1.0 / a;
}

var operations = [add, subtract, multiply, divide, mod, power, inverse];

var plusButton = document.getElementById('plus');
var minusButton = document.getElementById('minus');
var multiplyButton = document.getElementById('multiply');
var divideButton = document.getElementById('divide');
var modButton = document.getElementById('mod');
var inverseButton = document.getElementById('inverse');
var powerButton = document.getElementById('power');
var equalsButton = document.getElementById('equals')
var plusMinusButton = document.getElementById('sign-change');

function addition(e) {
    if(runningOperation === -1) {
        finalAnswer = textInput.value;
        textInput.value = "";
    }
    else {
        var currentInput = textInput.value;
        console.log(finalAnswer + ' ' + currentInput);
        finalAnswer = operations[runningOperation](Number(finalAnswer),Number(currentInput));
        console.log(finalAnswer);
        textInput.value = finalAnswer;
        isAnswer = 1;
    }
    runningOperation = 0;
}

function subtraction(e) {
    if(runningOperation === -1) {
        finalAnswer = textInput.value;
        textInput.value = "";
    }
    else {
        var currentInput = textInput.value;
        console.log(finalAnswer + ' ' + currentInput);
        finalAnswer = operations[runningOperation](Number(finalAnswer),Number(currentInput));
        console.log(finalAnswer);
        textInput.value = finalAnswer;
        isAnswer = 1;
    }
    runningOperation = 1;
}

function multiplication(e) {
    if(runningOperation === -1) {
        finalAnswer = textInput.value;
        textInput.value = "";
    }
    else {
        var currentInput = textInput.value;
        console.log(finalAnswer + ' ' + currentInput);
        finalAnswer = operations[runningOperation](Number(finalAnswer),Number(currentInput));
        console.log(finalAnswer);
        textInput.value = finalAnswer;
        isAnswer = 1;
    }
    runningOperation = 2;
}

function division(e) {
    if(runningOperation === -1) {
        finalAnswer = textInput.value;
        textInput.value = "";
    }
    else {
        var currentInput = textInput.value;
        console.log(finalAnswer + ' ' + currentInput);
        finalAnswer = operations[runningOperation](Number(finalAnswer),Number(currentInput));
        console.log(finalAnswer);
        textInput.value = finalAnswer;
        isAnswer = 1;
    }
    runningOperation = 3;
}

function modulo(e) {
    if(runningOperation === -1) {
        finalAnswer = textInput.value;
        textInput.value = "";
    }
    else {
        var currentInput = textInput.value;
        console.log(finalAnswer + ' ' + currentInput);
        finalAnswer = operations[runningOperation](Number(finalAnswer),Number(currentInput));
        console.log(finalAnswer);
        textInput.value = finalAnswer;
        isAnswer = 1;
    }
    runningOperation = 4;
}

function expon(e) {
    if(runningOperation === -1) {
        finalAnswer = textInput.value;
        textInput.value = "";
    }
    else {
        var currentInput = textInput.value;
        console.log(finalAnswer + ' ' + currentInput);
        finalAnswer = operations[runningOperation](Number(finalAnswer),Number(currentInput));
        console.log(finalAnswer);
        textInput.value = finalAnswer;
        isAnswer = 1;
    }
    runningOperation = 5;
}

function inverseFunction(e) {
    if(runningOperation === -1) {
        finalAnswer = textInput.value;
        finalAnswer = inverse(Number(finalAnswer));
        textInput.value = finalAnswer;
        isAnswer = 1;
    }
    else {
        var currentInput = textInput.value;
        console.log(finalAnswer + ' ' + currentInput);
        currentInput = inverse(Number(currentInput));
        console.log(currentInput);
        textInput.value = currentInput;
        isAnswer = 1;
    }
}

function equalTo(e) {
    if(runningOperation === -1) {
        isAnswer = 1;
    }
    else {
        var currentInput = textInput.value;
        console.log(finalAnswer + ' ' + currentInput);
        finalAnswer = operations[runningOperation](Number(finalAnswer), Number(currentInput));
        console.log(finalAnswer);
        textInput.value = finalAnswer;
        isAnswer = 1;
    }
    firstOperation = 0;
    runningOperation = -1;
}

function plusMinus(e) {
    var currentInput = textInput.value;
    currentInput = -Number(currentInput);
    textInput.value = currentInput;
}

plusButton.addEventListener('click',addition);
minusButton.addEventListener('click',subtraction);
multiplyButton.addEventListener('click',multiplication);
divideButton.addEventListener('click',division);
powerButton.addEventListener('click',expon);
modButton.addEventListener('click',modulo);
inverseButton.addEventListener('click',inverseFunction);
equalsButton.addEventListener('click',equalTo);
plusMinusButton.addEventListener('click',plusMinus)

function keyboardInput(e) {
    if(isAnswer === 1) {
        textInput.value = "";
        isAnswer = 0;
    }
}

function keyZero(e) {
    textInput.value = Number(textInput.value);
}
textInput.addEventListener('keydown',keyboardInput);
textInput.addEventListener('keyup',keyZero);