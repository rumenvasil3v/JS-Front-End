function solve(fruitType, weightGrams, pricePerKilogram) {
    const kilogram = 1000;
    const weightInKilograms = weightGrams / kilogram; 
    const purchasePrice = pricePerKilogram * weightInKilograms;

    const outputText = `I need $${purchasePrice.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruitType}.`;
    console.log(outputText);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);