const numDisplay = document.querySelector('.inputs');
const clear = document.querySelector('#clear');
const back = document.querySelector('#delete');
const numBtns = document.querySelectorAll('.numBtn');
const opBtns = document.querySelectorAll('.opBtn');
const equalBtn = document.querySelector('#equals');

let input = [];
let total = 0;
let actingNums = [];
let operator;

//need vars for num1, num2, and total when an operation is called on those numbers
//join input into one string then parseint to a number and store in variable
//let numString = input.join('');
//let workableNum = parseInt(numString);

clear.addEventListener('click', () => {
    numDisplay.innerHTML = '';
    input = [];
    total = 0;
    console.log(input);
})

function formatNum(arr) {
    let numString = arr.join('');
    let workableNum = parseInt(numString);

    if(isNaN(workableNum)) {
        workableNum = total;
    }

    if(actingNums.length < 2) {
        if(total > 0) {
            actingNums.push(total);
        }
        actingNums.push(workableNum);
        console.log(actingNums);
    } 

    if(actingNums.length == 2 && operator) {
        operate(operator, actingNums[0], actingNums[1]);
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

        console.log(input);
    })
})

opBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let op = btn.value;
        formatNum(input);

        input = [];
        operator = op;
        console.log(operator);
    })
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