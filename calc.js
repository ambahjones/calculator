const numDisplay = document.querySelector('.inputs');
const clear = document.querySelector('#clear');
const back = document.querySelector('#delete');
const numBtns = document.querySelectorAll('.numBtn');
const opBtns = document.querySelectorAll('.opBtn');

let input = [];
let total = 0;
let actingNums = [];
let operator1;
let operator2;


function resetDisplay() {
    numDisplay.classList.remove('mdText', 'smText');
}

clear.addEventListener('click', () => {
    numDisplay.innerHTML = '';
    input = [];
    total = 0;
    resetDisplay();
    console.log(input);
})

function formatNum(arr) {
    let numString = arr.join('');
    let workableNum = parseInt(numString);

    actingNums.push(workableNum);

    if(isNaN(workableNum)) {
        workableNum = total;
    }
}

numBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(input.length == 0) {
            numDisplay.innerHTML = '';
        }

        let showNum = document.createElement('span');
        showNum.textContent = `${btn.value}`;
        numDisplay.appendChild(showNum);
        input.push(btn.value); //max input comfortably displayed: 13 numbers

        if(input.length > 13) {
            numDisplay.classList.add('mdText');
        }

        if(input.length > 19) {
            numDisplay.classList.add('smText');
        }

        console.log(input);
    })
})

opBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let op = btn.value;
        formatNum(input);

        input = [];
        if(!operator1) {
            operator1 = op; 
        } else {
            operator2 = op;
        }

    })
})

back.addEventListener('click', () => {
    input.pop();
    numDisplay.removeChild(numDisplay.lastChild);
})

function add(num1, num2) {
    total += (num1 + num2);
    return total;
}

function subtract(num1, num2) {
    total += (num1 - num2);
    return total;
}

function multiply(num1, num2) {
    total += (num1 * num2);
    return total;
}

function divide(num1, num2) {
    total += (num1 / num2);
    return total;
}

function displayResult(num) {
    numDisplay.innerHTML = num;
}

function operate(operation, num1, num2) {

    switch(operation) {
        case 'add':
            add(num1, num2);
            break;
        case 'subtract':
            subtract(num1, num2);
            break;
        case 'multiply':
            multiply(num1, num2);
            break;
        case 'divide':
            divide(num1, num2);
            break;
        case 'equals':
            displayResult(total);
            break;
    }
    console.log(total);
    console.log(actingNums);
    displayResult(total);
}

function evaluate() {
    if(operator1 && actingNums.length == 1) {
        formatNum(input);
    }

    if(actingNums.length == 0 && total > 0) {
        actingNums.push(total);
        console.log(actingNums);
    } 

    if(actingNums.length == 2 && operator1) {
        operate(operator1, actingNums[0], actingNums[1]);

        actingNums = [];
    }
}

evaluate();