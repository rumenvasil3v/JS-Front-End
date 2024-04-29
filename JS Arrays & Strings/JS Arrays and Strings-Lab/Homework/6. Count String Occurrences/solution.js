function solve(text, wordToSearch) {
    let splittedText = text.split(' ');
    let filtered = splittedText.filter(word => word === `${wordToSearch}`);
    console.log(filtered.length);
}

solve('This is a word and it also is a sentence',
'is'
);

solve('softuni is great place for learning new programming languages',
'softuni'
);