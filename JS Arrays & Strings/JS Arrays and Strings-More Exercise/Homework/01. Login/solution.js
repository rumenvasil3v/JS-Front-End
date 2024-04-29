function solve(input) {
    const username = input.shift();
    const passwords = input.slice(0);
    
    let usernameReversed = '';
    for (let index = username.length - 1; index >= 0 ; index--) {
        usernameReversed += username[index];
    }

    let countOfTries = 0;
    for (let index = 0; index < passwords.length; index++) {
        if (passwords[index] === usernameReversed) {
            console.log(`User ${username} logged in.`);
            return;
        } else {
            countOfTries++;

            if (countOfTries === 4) {
                console.log(`User ${username} blocked!`);
                return;
            }

            console.log('Incorrect password. Try again.');
        } 
    }
}

solve(['Acer','login','go','let me in','recA']);
solve(['momo','omom']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);