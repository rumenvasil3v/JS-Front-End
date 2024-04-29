function solve(text) {
    const wordOccurrences = {};

    const wordsArray = text.toLowerCase().split(' ');
    for (const word of wordsArray) {
        if (!(wordOccurrences.hasOwnProperty(word))) {
            wordOccurrences[word] = 0;
        }

        wordOccurrences[word]++;
    }

    const filteredWords = Object.entries(wordOccurrences)
    .filter(([key, value]) => value % 2 === 1);

    const filteredOccurrences = Object.fromEntries(filteredWords);

    console.log(Object.keys(filteredOccurrences).join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

solve('Cake IS SWEET is Soft CAKE sweet Food');