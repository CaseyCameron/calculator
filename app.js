import { add, subtract, multiply, divide, } from './calculation.js';

function getNumber(input){
    return Number(input.value);
}

function initOperator(firstInputId, secondInputId, buttonId, resultId, calculation){
    const input1 = document.getElementById(firstInputId);
    const input2 = document.getElementById(secondInputId);
    const button = document.getElementById(buttonId);
    const display = document.getElementById(resultId);

    button.addEventListener('click', () => {
        display.value = calculation(getNumber(input1), getNumber(input2));
        console.log(display.value);
        console.log(resultId);
    });
}

initOperator('add-input-one', 'add-input-two', 'add-button', 'addition-result', add);
initOperator('subtract-input-one', 'subtract-input-two', 'subtract-button', 'subtraction-result', subtract);
initOperator('multiply-input-one', 'multiply-input-two', 'multiply-button', 'multiplication-result', multiply);
initOperator('divide-input-one', 'divide-input-two', 'divide-button', 'division-result', divide);