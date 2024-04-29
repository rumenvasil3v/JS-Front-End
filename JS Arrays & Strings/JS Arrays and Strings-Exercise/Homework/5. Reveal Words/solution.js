function solve(wordsToReveal, text) {
    const textWords = text.split(' ');
    const wordsToRevealArray = wordsToReveal.split(', ');

    let newArray = [];
    for (let index = 0; index < textWords.length; index++) {

        if (textWords[index].startsWith('*')) {

            for (const wordToReveal of wordsToRevealArray) {
                if (textWords[index].length === wordToReveal.length) {
                    textWords[index] = wordToReveal;
                    break;
                }
            }

            newArray[index] = textWords[index]; 

        } else {
            newArray[index] = textWords[index];
        } 
    }

    console.log(newArray.join(' '));
}

solve('great',
'softuni is ***** place for learning new programming languages'
);

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
);