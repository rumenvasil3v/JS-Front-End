function solve(array, numberOfRotations) {
    let newArray = array.slice(numberOfRotations % array.length);
    let firstPart = array.slice(0, numberOfRotations % array.length);

    const combined = newArray.concat(firstPart);
    console.log(combined.join(' '));
}

solve([51, 47, 32, 61, 21], 2);
solve([2, 4, 15, 31], 5);