function solveWithArrayJoin(firstCharacter, secondCharacter, thirdCharacter) {
    let text =  [`${thirdCharacter}`, `${secondCharacter}`, `${firstCharacter}`].join(' ');
    
    console.log(text);
}

solveWithArrayJoin('A',
'B',
'C'
);

solveWithArrayJoin('1',
'L',
'&'
);

function solve(firstCharacter, secondCharacter, thirdCharacter) {
    let text = `${thirdCharacter} ${secondCharacter} ${firstCharacter}`;

    console.log(text);
}

solve('A',
'B',
'C'
);
solve('1',
'L',
'&'
);