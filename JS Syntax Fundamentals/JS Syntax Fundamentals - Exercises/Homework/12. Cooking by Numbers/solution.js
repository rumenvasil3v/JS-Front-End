function solve(number, ...operations) {
    let parsedNumber = Number(number);

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case 'chop': parsedNumber /= 2; break;
            case 'dice': parsedNumber = Math.sqrt(parsedNumber); break;
            case 'spice': parsedNumber += 1; break;
            case 'bake': parsedNumber *= 3; break;
            case 'fillet': parsedNumber -= parsedNumber * 0.2; break;
        }   

        console.log(parsedNumber);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');