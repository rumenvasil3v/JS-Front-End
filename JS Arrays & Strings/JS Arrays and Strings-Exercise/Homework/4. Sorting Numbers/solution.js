function solve(arrayOfNames) { 
    let sorted = arrayOfNames.sort((a, b) => {
        return a - b;
    });

    let finalResult = [];
    
    let count = 0;
    while (sorted.length > 0) {
        let number = 0;
        if (count % 2 === 0) {
            number = sorted.shift();
        } else {
            number = sorted.pop();
        }

        finalResult.unshift(number);
        count++;
    }

    return finalResult.reverse();
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);