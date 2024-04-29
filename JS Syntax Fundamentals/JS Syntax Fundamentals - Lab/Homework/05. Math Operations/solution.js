function solve(firstNumber, secondNumber, mathOperationSymbol) {
    
    let result = null;
    switch (mathOperationSymbol) {
        case '+': result = firstNumber + secondNumber; break;
        case '-': result = firstNumber - secondNumber; break;
        case '*': result = firstNumber * secondNumber; break;
        case '/': result = firstNumber / secondNumber; break;
        case '%': result = firstNumber % secondNumber; break;
        case '**': result = firstNumber ** secondNumber; break;
    }

    console.log(result);
}

solve(5, 6, '+');
solve(3, 5.5, '*');