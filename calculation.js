export function add(x, y){
    return x + y;
}

export function subtract(x, y){
    return x - y;
}

export function multiply(x, y){
    return x * y;
}

export function divide(x, y){
    return x / y;
}

export function calculate(x, y, operator){
    if (operator === 'add'){
        return x + y;
    } else if (operator === 'subtract') {
        return x - y;
    } else if (operator === 'multiply'){
        return x * y;
    } else if (operator === 'divide'){
        return x / y;
    } else {
        return null;
    }
}
