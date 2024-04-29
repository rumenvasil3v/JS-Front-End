function solve(arrayOfStrings, numberStep) {
    const filteredArray = arrayOfStrings.filter((element, index) => index % numberStep === 0);
    
    return filteredArray;
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);

solve(['dsa',
'asd', 
'test', 
'tset'], 
2
);

solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
);