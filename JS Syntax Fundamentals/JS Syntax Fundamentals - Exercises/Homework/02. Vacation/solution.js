function solve(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
    let pricePerPerson;

    switch (typeOfTheGroup) {
        case 'Students':
            if (dayOfTheWeek == 'Friday') {
                pricePerPerson = 8.45;
            } else if (dayOfTheWeek == 'Saturday') {
                pricePerPerson = 9.80;
            } else if (dayOfTheWeek == 'Sunday') {
                pricePerPerson = 10.46;
            }

            if (groupOfPeople >= 30) {
                pricePerPerson = pricePerPerson * 0.85;
            }
        break;
        case 'Business':
            if (dayOfTheWeek == 'Friday') {
                pricePerPerson = 10.90;
            } else if (dayOfTheWeek == 'Saturday') {
                pricePerPerson = 15.60;
            } else if (dayOfTheWeek == 'Sunday') {
                pricePerPerson = 16;
            }
        break;
        case 'Regular':
            if (dayOfTheWeek == 'Friday') {
                pricePerPerson = 15;
            } else if (dayOfTheWeek == 'Saturday') {
                pricePerPerson = 20;
            } else if (dayOfTheWeek == 'Sunday') {
                pricePerPerson = 22.50;
            }

            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                pricePerPerson = pricePerPerson * 0.95;
            }
        break;
    }

    let totalPriceForAllStudents = pricePerPerson * groupOfPeople;
    
    if (groupOfPeople >= 100 && typeOfTheGroup == 'Business') {
        const tenPeoplePrice = pricePerPerson * 10;
        totalPriceForAllStudents -= tenPeoplePrice;
    } 

    const output = `Total price: ${totalPriceForAllStudents.toFixed(2)}`
    console.log(output);
}

solve(30, "Students", "Sunday");
solve(20, "Regular", "Saturday");
solve(101, 'Business', 'Friday');
solve(92, 'Business', 'Friday');
solve(200, 'Business', 'Sunday');