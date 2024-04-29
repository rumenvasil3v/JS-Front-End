function solve(employeesInfo) {
    const arrayOfEmployees = [];

    function getPersonNumberOfEmployee(employee) {
        let countOfLetters = 0;

        for (const letter of employee) {
            countOfLetters++;
        }

        return countOfLetters;
    }

    for (const employee of employeesInfo) {

        const employeePersonalNumber = getPersonNumberOfEmployee(employee); 
        const currentEmployee = {
            Name: employee,
            'Personal Number': employeePersonalNumber,
        }

        arrayOfEmployees.push(currentEmployee);
    }

// First Approach

    // const resultArray = arrayOfEmployees.map(value => `Name: ${value.Name} -- Personal Number: ${value["Personal Number"]}`);

    // const printEmployees = function(resultArray) {
    //     for (const employee of resultArray) {
    //         console.log(employee);
    //     }
    // }

    // printEmployees(resultArray);

// Second Approach
    // const employeeKeys = Object.keys(arrayOfEmployees[0]);
    // const [firstKey, secondKey] = employeeKeys;

    // const resultArray = arrayOfEmployees
    // .map(value => `${firstKey}: ${value[firstKey]} -- ${secondKey}: ${value[secondKey]}`);  
    
    // for (const employee of resultArray) {
    //     console.log(employee);
    // }
}

// solve([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
// ]
// );

solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    );