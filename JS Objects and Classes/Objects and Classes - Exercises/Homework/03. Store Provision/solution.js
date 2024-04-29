function solve(currentStocksOfTheStoreArray, productsThatTheStoreHasOrdered) {
    const productsArray = [];

    for (let i = 0; i < currentStocksOfTheStoreArray.length; i += 2) {
        const productName = currentStocksOfTheStoreArray[i];
        const productQuantity = Number(currentStocksOfTheStoreArray[i + 1]);

        const currentProduct = [productName, productQuantity];

        productsArray.push(currentProduct);
    }

    const products = Object.fromEntries(productsArray);
    
    for (let i = 0; i < productsThatTheStoreHasOrdered.length; i += 2) {
        const productName = productsThatTheStoreHasOrdered[i];
        const productQuantity = Number(productsThatTheStoreHasOrdered[i + 1]);

        if (!(products.hasOwnProperty(productName))) {
            products[productName] = productQuantity;
        } else {
            products[productName] += productQuantity;
        }
    }

    for (const key in products) {
        console.log(`${key} -> ${products[key]}`);
    }
}

// solve([
//     'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
//     ],
//     [
//     'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
//     ]
//     );

solve([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    );