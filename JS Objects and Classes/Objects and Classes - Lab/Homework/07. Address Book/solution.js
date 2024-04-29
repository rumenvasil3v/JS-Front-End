function solve(peopleResidence) {
    const peopleLocation = {};

    for (const personResidence of peopleResidence) {
        const personResidenceArray = personResidence.split(':');

        const [personName, personLocation] = personResidenceArray;

        peopleLocation[personName] = personLocation;
    }

    const sortPeopleLocation = function ([keyA, valueA], [keyB, ValueB]) {
        if (keyA > keyB) {
            return 1;
        } else if (keyA < keyB) {
            return -1;
        } else {
            return 0;
        }
    }

    const entriesOfPeopleLocationToSort = Object.entries(peopleLocation);
    entriesOfPeopleLocationToSort.sort(sortPeopleLocation);

    const getSortedPeopleLocation = Object.fromEntries(entriesOfPeopleLocationToSort);

    const printPeopleResidenceInfo = function (sortedPeopleLocation) {
        for (const key in sortedPeopleLocation) {
            console.log(`${key} -> ${sortedPeopleLocation[key]}`);
        }
    }

    printPeopleResidenceInfo(getSortedPeopleLocation);
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);

// solve(['Bob:Huxley Rd',
// 'John:Milwaukee Crossing',
// 'Peter:Fordem Ave',
// 'Bob:Redwing Ave',
// 'George:Mesta Crossing',
// 'Ted:Gateway Way',
// 'Bill:Gateway Way',
// 'John:Grover Rd',
// 'Peter:Huxley Rd',
// 'Jeff:Gateway Way',
// 'Jeff:Huxley Rd']
// );