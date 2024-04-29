function solve(tableDataAsArray) {
    const towns = [];

    for (const tableRow of tableDataAsArray) {
        const tableRowInfo = tableRow.split(' | ');

        let [town, latitude, longitude] = tableRowInfo;

        latitude = Number(latitude);
        latitude = latitude.toFixed(2);

        longitude = Number(longitude);
        longitude = longitude.toFixed(2);

        const currentTown = {
            town,
            latitude,
            longitude,
        }

        // console.log(currentTown);
        towns.push(currentTown);
    }

    return towns.forEach(town => console.log(town));
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);

solve(['Plovdiv | 136.45 | 812.575']);