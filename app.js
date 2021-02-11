// grab DOM elements

// set event listeners on each button, do math, update DOM


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
    additionResult.textContent = Number(addInputOne.value) + Number(addInputTwo.value);
});

subtractButton.addEventListener('click', () => {
    subtractionResult.textContent = Number(subtractInputOne.value) - Number(subtractInputTwo.value);
});

multiplyButton.addEventListener('click', () => {
    multiplicationResult.textContent = Number(multiplyInputOne.value) * Number(multiplyInputTwo.value);
});

divideButton.addEventListener('click', () => {
    divisionResult.textContent = Number(divideInputOne.value) / Number(divideInputTwo.value);
});

