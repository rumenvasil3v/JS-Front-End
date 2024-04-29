function solve(arrayOfNames) { 
    let sorted = arrayOfNames.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
       
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
    
        return 0;
    });

    for (let index = 0; index < sorted.length; index++) {
        console.log(`${index + 1}.${sorted[index]}`);
    }
}

solve(["John", "bob", "Christina", "Ema"]);