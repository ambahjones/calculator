const numDisplay = document.querySelector('.inputs');
const clear = document.querySelector('#clear');
const back = document.querySelector('#delete');
const numBtns = document.querySelectorAll('.numBtn');
const opBtns = document.querySelectorAll('.opBtn');

let input = [];
let total = 0;
//let actingNums = [];
let actingNum1 = null;
let actingNum2 = null;
let operator1 = null;
let operator2 = null;

//resets text size 
function resetDisplay() {
    numDisplay.classList.remove('mdText', 'smText');
}

//creates number from input array of strings
function formatNum(arr) {
    let numString = arr.join('');
    let workableNum = parseInt(numString);

    if(isNaN(workableNum)) {
        workableNum = total;
        actingNum1 = workableNum;
    }

    if(actingNum1 && actingNum2 && total > 0) {
        actingNum1 = total;
        actingNum2 = workableNum;
    }else if(actingNum1) {
        actingNum2 = workableNum;
    }else if(actingNum1 == null) {
        actingNum1 = workableNum;
    }

    //actingNums.push(workableNum);


    console.log(actingNum1);
    console.log(actingNum2);
}

//operator functions, may be redundant, seems to work fine with inner expression put into operate function
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

//takes in an operator and two operands, need to find a way to pass second converted input then calculate
function operate(operation, num1, num2) {
    switch(operation) {
        case 'add':
            total += (num1 + num2);
            //add(num1, num2);
            break;
        case 'subtract':
            total += (num1 - num2);
            //subtract(num1, num2);
            break;
        case 'multiply':
            total += (num1 * num2);
            //multiply(num1, num2);
            break;
        case 'divide':
            total += (num1 / num2);
            //divide(num1, num2);
            break;
        case 'equals':
            evaluate();
            break;
    }
    console.log(total);
    console.log(actingNum1);
    console.log(actingNum2);
    displayResult(total);
}

function evaluate() {

}


//event listeners
clear.addEventListener('click', () => {
    numDisplay.innerHTML = '';
    input = [];
    total = 0;
    actingNum1 = null;
    actingNum2 = null;
    operator1 = null;
    operator2 = null;
    resetDisplay();
})

back.addEventListener('click', () => {
    input.pop();
    numDisplay.removeChild(numDisplay.lastChild);
})

opBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let op = btn.value;
        formatNum(input);

        input = [];
        if(operator1 == null) {
            operator1 = op; 
        }else if(operator1){
            operator2 = op;
        }else if(operator1 && operator2 && total > 0) {
            operator1 = operator2;
            operator2 = null;
        }
        console.log(operator1);
        console.log(operator2);
        if(operator1 && operator2 && actingNum1 && actingNum2) {
            operate(operator1, actingNum1, actingNum2);
            console.log(total);
        }
    })
})

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