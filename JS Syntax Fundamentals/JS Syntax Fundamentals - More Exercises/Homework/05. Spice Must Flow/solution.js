function solve(startingYield) {
    let totalAmountSpice = 0;
    let daysCount = 0;
    const workersConsumeEachDay = 26;

    while (startingYield >= 100) {
        totalAmountSpice += startingYield;
        startingYield -= 10;

        daysCount++;

        totalAmountSpice -= workersConsumeEachDay;
    }

    console.log(daysCount);

    if (totalAmountSpice > workersConsumeEachDay) {
        totalAmountSpice -= workersConsumeEachDay;
    }

    console.log(totalAmountSpice);
}

solve(111);
solve(450);
solve(100);
solve(99);