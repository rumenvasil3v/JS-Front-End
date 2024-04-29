function solve(firstOperand, operator, secondOperand) {
    let result = 0;
    
    switch (operator) {
        case '+': result = firstOperand + secondOperand; break;
        case '-': result = firstOperand - secondOperand; break;
        case '/': result = firstOperand / secondOperand; break;
        case '*': result = firstOperand * secondOperand; break;
    }

    console.log(result.toFixed(2));
}

solve(5,
    '+',
    10
    );
solve(25.5,
    '-',
    3
    );