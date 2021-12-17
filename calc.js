let numDisplay = document.querySelector('.inputs');
let clear = document.querySelector('#clear');
let back = document.querySelector('#delete');
let numBtns = document.querySelectorAll('.numBtn');
let input = [];


numBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        //
        console.log(btn.value);
        //add value to array to work with 
        //show value in display area as button is pressed
        let showNum = document.createElement('span');
        showNum.textContent = `${btn.value}`;
        numDisplay.appendChild(showNum);
        input.push(btn.value);

        console.log(input);
    })
})

clear.addEventListener('click', () => {
    numDisplay.innerHTML = '';
    input = [];
    console.log(input);
})

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operation, num1, num2) {
    let result;
    switch(operation) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
    }
    //console.log(result);
    numDisplay.innerHTML = result;
    return result;
}