function solve(start, end) {
    let sum = 0;
    let result = '';

    for (let i = start; i <= end; i++) {
        sum += i;
        result += `${i} `
    }

    console.log(result);
    console.log(`Sum: ${sum}`);
}

solve(0, 5);
solve(5, 10);
solve(0, 26);
solve(50, 60);
solve(10, 1);