function solve(firstName, lastName, hairColor) {
    const person = {
        name: firstName,
        lastName,
        hairColor,
    }

    const jsonString = JSON.stringify(person);
    console.log(jsonString);
}

solve('George', 'Jones', 'Brown');