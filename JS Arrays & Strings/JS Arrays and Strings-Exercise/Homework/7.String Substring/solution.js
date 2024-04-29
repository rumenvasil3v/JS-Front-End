function solve(word, text) {
    const regex = new RegExp(`${word}`, 'gi');
    let match = regex.exec(text);

    if (match) {
        console.log(word);
        return;
    }
    
    console.log(`${word} not found!`);
}

function solve(word, text) {
    const textArray = text.split(' ');

    for (const textWord of textArray) {
        if (textWord.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
}

solve(' ',
'is the best programming language JavaScript, bOb'
);

solve('C#',
'ok is the best C# programming language'
);

solve('C#',
'ok is the best c# programming language');