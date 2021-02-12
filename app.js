// grab DOM elements

// set event listeners on each button, do math, update DOM
import { calculate } from './utilities.js';

const addInputOne = document.getElementById('add-input-one');
const addInputTwo = document.getElementById('add-input-two');
const addButton = document.getElementById('add-button');
const additionResult = document.getElementById('addition-result');

const subtractInputOne = document.getElementById('subtract-input-one');
const subtractInputTwo = document.getElementById('subtract-input-two');
const subtractButton = document.getElementById('subtract-button');
const subtractionResult = document.getElementById('subtraction-result');

const multiplyInputOne = document.getElementById('multiply-input-one');
const multiplyInputTwo = document.getElementById('multiply-input-two');
const multiplyButton = document.getElementById('multiply-button');
const multiplicationResult = document.getElementById('multiplication-result');

const divideInputOne = document.getElementById('divide-input-one');
const divideInputTwo = document.getElementById('divide-input-two');
const divideButton = document.getElementById('divide-button');
const divisionResult = document.getElementById('division-result');

addButton.addEventListener('click', () => {
    additionResult.value = calculate(addInputOne.value, addInputTwo.value, 'add');
});

subtractButton.addEventListener('click', () => {
    subtractionResult.textContent = calculate(subtractInputOne.value, subtractInputTwo.value, 'subtract');
});

multiplyButton.addEventListener('click', () => {
    multiplicationResult.textContent = calculate(multiplyInputOne.value, multiplyInputTwo.value, 'multiply');
});

divideButton.addEventListener('click', () => {
    divisionResult.textContent = calculate(divideInputOne.value, divideInputTwo.value, 'divide');
});

