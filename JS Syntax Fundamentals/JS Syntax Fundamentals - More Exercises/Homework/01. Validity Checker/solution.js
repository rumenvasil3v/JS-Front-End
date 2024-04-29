function solve(x1, y1, x2, y2) {
    const beginX = 0;
    const beginY = 0;

    // Distance between two points is considered valid if it is an integer value

    // Firstly, Comparing {x1, y1} to {0, 0}
    const firstDistance = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2);
    const isItValidFisrtDistance = (firstDistance % 1 > 0) ? 'invalid' : 'valid';
    console.log(`{${x1}, ${y1}} to {${beginX}, ${beginY}} is ${isItValidFisrtDistance}`);

    // Secodly, Comparing {x2, y2} to {0, 0}
    const secondDistance = Math.sqrt((0 - x2) ** 2 + (0 - y2) ** 2);
    const isItValidSecondDistance = (secondDistance % 1 > 0) ? 'invalid' : 'valid';
    console.log(`{${x2}, ${y2}} to {${beginX}, ${beginY}} is ${isItValidSecondDistance}`);

    // Finaly, Comparing {x1, y1} to {x2, y2}
    const thirdDistance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const isItValidThirdDistance = (thirdDistance % 1 > 0) ? 'invalid' : 'valid';
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isItValidThirdDistance}`);
}

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);