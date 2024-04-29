function solve(text) {
    const regex = /([A-Z]{1}[a-z]+)|[A-Z]{1}/g;
    let match = regex.exec(text);

    let resultArray = [];
    while (match !== null) {
        const word = match[0];
        resultArray.push(word);

        match = regex.exec(text);
    }

    console.log(resultArray.join(', '));
}

// function solve(text) {

// }

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');
solve('ThisIsSoAnnoyingToTY');