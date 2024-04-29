function solve(text, startingIndex, countOfElementsToSubstring) {
    let output = '';
    let count = 0;

    for (let index = 0; index < text.length; index++) {
        if (index >= startingIndex) {
            output += text[index];
            count++;

            if (count === countOfElementsToSubstring) {
                break;
            }
        }
    }   

    console.log(output);
}

function quickSolve(text, startingIndex, countOfElementsToSubstring) {
    let output = '';
    output = text.substring(startingIndex, countOfElementsToSubstring + startingIndex);
    console.log(output);
}

quickSolve('ASentence', 1, 8);
quickSolve('SkipWord', 4, 7);
quickSolve('SkipWord', 1, 4); 
quickSolve('SkipWord', 0, 4); 