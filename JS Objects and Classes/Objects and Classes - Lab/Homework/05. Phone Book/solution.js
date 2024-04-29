function solve(peopleInfo) {
    const phoneBook = {};
    
    for (const person of peopleInfo) {
        const personInfo = person.split(' ');

        const personName = personInfo.shift();
        const personNumber = personInfo.shift();

        phoneBook[personName] = personNumber;
    }

    const printPhoneBook = phoneBook => {
        for (const key in phoneBook) {
            console.log(`${key} -> ${phoneBook[key]}`);
        }
    }

    printPhoneBook(phoneBook);
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);

solve(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
);