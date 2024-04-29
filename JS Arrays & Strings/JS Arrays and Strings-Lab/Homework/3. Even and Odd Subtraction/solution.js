function solve(array) {
    let evenNumbersSum = 0;
    let oddNumbersSum = 0;

    for (const number of array) {
        let evenOrOdd = (number % 2 === 0) ? evenNumbersSum += number : oddNumbersSum += number;
    }

    let difference = evenNumbersSum - oddNumbersSum;
    console.log(difference);
}

solve([1,-2,3,4,-5,-6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]); 