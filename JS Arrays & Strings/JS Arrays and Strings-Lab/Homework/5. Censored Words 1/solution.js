function solve(text, word) {
    let result = '';
    let regex = new RegExp(`${word}`, 'g'); 

    result = text.replace(regex, '*'.repeat(word.length));
    console.log(result);
}

solve('A small sentence with some small words', 'small');
solve('Find the hidden word', 'hidden');