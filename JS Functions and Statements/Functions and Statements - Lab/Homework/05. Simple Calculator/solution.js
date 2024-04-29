

function solve(firstNumber, secondNumber, operator) {

    const operation = getOperation(operator);
    const result = operation(firstNumber, secondNumber);
    console.log(result);

    function getOperation(operation) {
        switch (operation) {
            case 'multiply':
                return (a, b) => a * b;
            case 'divide':
                return (a, b) => a / b;
            case 'add':
                return (a, b) => a + b;
             case 'subtract':
                return (a, b) => a - b;
        }
    }
}

function solve(firstNumber, secondNumber, operator) {

    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    const array = [multiply, divide, add, subtract];
    const operation = array.find(x => `${x.name}` === operator);
    console.log(operation(firstNumber, secondNumber));
}



solve(5,
    5,
    'multiply'
    );

solve(40,
    8,
    'divide'
    );

solve(12,
    19,
    'add'
    );

solve(50,
    13,
    'subtract'
    );