

const theBody = document.querySelector('body');
const first = document.getElementById('first-number');
const second = document.getElementById('second-number');
const operator = document.getElementById('operator-select');
const answer = document.getElementById('answer');

const calculate = (operator, first, second) => {
    switch (operator) {
        case '+':
            return first + second
            break;
        case '-':
            return first - second
            break;
        case '*':
            return first * second
            break;
        case '/':
            return first / second
            break;
    }
}

const execute = () => {
    const theAnswer = calculate(operator.value, parseInt(first.value), parseInt(second.value));
    answer.innerText = theAnswer;
}

theBody.addEventListener('input', execute, once="true");


   

   