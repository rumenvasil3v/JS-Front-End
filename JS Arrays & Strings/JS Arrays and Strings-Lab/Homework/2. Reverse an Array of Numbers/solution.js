function solve(n, array) {
    let newArray = [];
    
    for (let i = 0; i < n; i++) {
        let currentElement = array.shift();
        newArray.unshift(currentElement);
    }

    let output = '';
    for (let i = 0; i < newArray.length; i++) {
        output += newArray[i] + ' ';
    }

    console.log(output);
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);