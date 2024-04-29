function solve(peterLostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let countOfBrokenShields = 0;

    for (let i = 1; i <= peterLostFights; i++) {
        if (i %  2 === 0 && i % 3 === 0) {
            expenses += helmetPrice;
            expenses += swordPrice;
            expenses += shieldPrice;
            countOfBrokenShields++;

            if (countOfBrokenShields === 2) {
                expenses += armorPrice;
                countOfBrokenShields = 0;
            }

            continue;
        }

        if (i % 2 === 0) {
            expenses += helmetPrice;
            continue;
        }

        if (i % 3 === 0) {
            expenses += swordPrice;
            continue;
        }
    }

    const outputText = `Gladiator expenses: ${expenses.toFixed(2)} aureus`;
    console.log(outputText);
}

solve(7,
    2,
    3,
    4,
    5
    );

solve(23,
    12.50,
    21.50,
    40,
    200
    );