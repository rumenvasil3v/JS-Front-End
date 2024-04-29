function solve(arrayAmountOfGold) {
    const oneBitcoinPrice = 11949.16;
    const oneGramOfGoldPrice = 67.51;
    
    let firstBitcoinBought = 0;
    let totalAmount = 0;

    for (let index = 0; index < arrayAmountOfGold.length; index++) {
        let minedGold = arrayAmountOfGold[index];

        if ((index + 1) % 3 === 0) {
            minedGold = minedGold * 0.7;
        }

        let minedGoldPrice = minedGold * oneGramOfGoldPrice;
        totalAmount += minedGoldPrice;

        if (totalAmount >= oneBitcoinPrice) {
            if (firstBitcoinBought === 0) {
                firstBitcoinBought = index + 1;
            }
        }
    }

    const countOfPossibleBitcoinsToBuy = Math.floor(totalAmount / oneBitcoinPrice);
    const priceForAllPossibleBitcoins = countOfPossibleBitcoinsToBuy * oneBitcoinPrice;
    totalAmount -= priceForAllPossibleBitcoins;

    console.log(`Bought bitcoins: ${countOfPossibleBitcoinsToBuy}`);

    if (countOfPossibleBitcoinsToBuy > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinBought}`);
    }

    console.log(`Left money: ${totalAmount.toFixed(2)} lv.`);
}

solve([100, 200, 300]);
solve([3124.15, 504.212, 2511.124]);
solve([50, 100]);