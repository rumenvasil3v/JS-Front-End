function solve(number) {
    let convert = number.toString();
    let sum = 0;

    for (const iterator of convert) {
        const digit = Number(iterator);
        sum += digit;
    }

    console.log(sum);
}

solve(1987);

function solveWithString(number) {
    let convert = number.toString();
    let sum = 0;
    
    for (let i = 0; i < convert.length; i++) {
        const digit = Number(convert[i]);

        sum += digit;
    }

    console.log(sum);
}

solveWithString(245678);
solveWithString(97561);
solveWithString(97561);