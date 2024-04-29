function solve(arrayOfWords) {
    const wordsToFind = arrayOfWords.shift();
    const wordsToFindArray = wordsToFind.split(' ');

    const keyValuePairsWords = {};

    for (const word of wordsToFindArray) {
        keyValuePairsWords[word] = 0;        
    }

    for (const word of arrayOfWords) {
        if (keyValuePairsWords.hasOwnProperty(word)) {
            keyValuePairsWords[word]++;
        }
    }

    const sortedWords = Object.entries(keyValuePairsWords)
    .sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

    const sortedWordsKeyValuePairs = Object.fromEntries(sortedWords);

    for (const key in sortedWordsKeyValuePairs) {
        console.log(`${key} - ${sortedWordsKeyValuePairs[key]}`);
    }
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );

solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );