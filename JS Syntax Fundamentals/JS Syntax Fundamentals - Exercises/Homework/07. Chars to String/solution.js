function solve(firstCharacter, secondCharacter, thirdCharacter) {
    const text = `${firstCharacter}${secondCharacter}${thirdCharacter}`;
    
    console.log(text);
}

function solveWithArrayJoin(firstCharacter, secondCharacter, thirdCharacter) {
    let text =  [`${firstCharacter}`, `${secondCharacter}`, `${thirdCharacter}`].join('');
    
    console.log(text);
}

solve('a',
'b',
'c'
);

solve('%',
'2',
'o'
);

solve('1',
'5',
'p'
)

solve(1, 2, 4);

solve('abc', 'okay', 'okay');

solveWithArrayJoin('a',
'b',
'c'
);