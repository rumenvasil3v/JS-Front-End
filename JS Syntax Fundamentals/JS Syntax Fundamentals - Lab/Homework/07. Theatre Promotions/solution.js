function solve(typeOfDay, ageOfPerson) {
    if (ageOfPerson < 0 || ageOfPerson > 122) {
        console.log('Error!');
    }
    else {
        let ticketPrice;

        switch (typeOfDay) {
            case 'Weekday':
                if (ageOfPerson >= 0 && ageOfPerson <= 18) {
                    ticketPrice = 12;
                } else if (ageOfPerson > 18 && ageOfPerson <= 64) {
                    ticketPrice = 18;
                } else {
                    ticketPrice = 12;
                }
                break;
            case 'Weekend':
                if (ageOfPerson >= 0 && ageOfPerson <= 18) {
                    ticketPrice = 15;
                } else if (ageOfPerson > 18 && ageOfPerson <= 64) {
                    ticketPrice = 20;
                } else {
                    ticketPrice = 15;
                }
                break;
            case 'Holiday':
                if (ageOfPerson >= 0 && ageOfPerson <= 18) {
                    ticketPrice = 5;
                } else if (ageOfPerson > 18 && ageOfPerson <= 64) {
                    ticketPrice = 12;
                } else {
                    ticketPrice = 10;
                }
                break;
            default:
                break;
        }

        console.log(`${ticketPrice}$`);
    }
}

solve('Holiday', 15);
solve('Holiday', -12);
solve('Weekday', 42);