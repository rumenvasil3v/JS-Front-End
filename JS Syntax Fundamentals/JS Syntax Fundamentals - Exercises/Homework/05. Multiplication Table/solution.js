function solve(number) {
    const start = 1;
    const end = 10;

    for (let i = start; i <= end; i++) {
        const product = i * number;
        
        console.log(`${number} X ${i} = ${product}`);
    }
}

solve(5);
solve(2);