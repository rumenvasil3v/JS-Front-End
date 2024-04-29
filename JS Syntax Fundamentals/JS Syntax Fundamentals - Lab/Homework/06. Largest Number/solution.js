function solve(firstNumber, secondNumber, thirdNumber) {
    let largestNumber;

    if (firstNumber > secondNumber) {
        if (firstNumber > thirdNumber) {
            largestNumber = firstNumber;
        } else {
            largestNumber= thirdNumber;
        }
    } else if (firstNumber < secondNumber) {
        if (secondNumber > thirdNumber) {
            largestNumber = secondNumber;
        } else {
            largestNumber = thirdNumber;
        }
    } else {
        if (firstNumber > thirdNumber) {
            largestNumber = firstNumber;
        } else {
            largestNumber = thirdNumber;
        }
    }

    console.log(`The largest number is ${largestNumber}.`);
}

function secondSolution(firstNumber, secondNumber, thirdNumber) {
    let largestNumber = Math.max(firstNumber, secondNumber, thirdNumber);
    console.log(`The largest number is ${largestNumber}.`);
}

secondSolution(5, -3, 16);
secondSolution(-3, -5, -22.5);
secondSolution(-5, -5, -22.5);