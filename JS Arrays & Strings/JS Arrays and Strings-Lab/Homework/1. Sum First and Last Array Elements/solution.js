function solve(arrayOfNumbers) {

    if (arrayOfNumbers.length > 1) {
        let firstElementOfArray = arrayOfNumbers.shift();
        let lastElementOfArray = arrayOfNumbers.pop();

        const sumOfTwoElements = firstElementOfArray + lastElementOfArray;
        console.log(sumOfTwoElements);

        return;
    }

    console.log(arrayOfNumbers.pop());
}

solve([20, 30, 40]);
solve([10, 17, 22, 33]);
solve([11, 58, 69]);
solve([11]);