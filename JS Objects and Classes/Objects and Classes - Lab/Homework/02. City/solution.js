function solve(city) {
    const keys = Object.keys(city);

    for (const key of keys) {
        console.log(`${key} -> ${city[key]}`);
    }
}

solve({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
);