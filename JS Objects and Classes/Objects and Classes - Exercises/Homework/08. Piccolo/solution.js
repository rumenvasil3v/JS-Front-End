function solve(carInfo) {
    const carNumbers = {};

    for (const car of carInfo) {
        const currentCarInfo = car.split(', ');
        const [direction, carNumber] = currentCarInfo;

        if (direction === 'IN') {
            carNumbers[carNumber] = 'IN';
        } else if (direction === 'OUT') {
            delete carNumbers[carNumber];
        }
    }

    if (Object.keys(carNumbers).length > 0) {
        Object.entries(carNumbers)
        .sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB))
        .forEach(car => console.log(car[0]));
    } else {
        console.log('Parking Lot is Empty');
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);