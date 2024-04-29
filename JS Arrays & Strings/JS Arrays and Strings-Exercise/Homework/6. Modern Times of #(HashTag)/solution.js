function solve(text) {
    const regex = new RegExp('#([A-Za-z]+)\\b', 'gi');
    let match = regex.exec(text);

    while (match !== null) {
        const word = match[1];
        console.log(word);

        match = regex.exec(text);
    }
}

solve('Nowadays everyone uses # to tag a #special123 word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');