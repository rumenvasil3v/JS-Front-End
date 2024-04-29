function solve(argument) {
    if (typeof argument === 'number') {
        let circleArea = Math.PI * argument ** 2;
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof argument}.`);
    }
}

solve(5);
solve('name');