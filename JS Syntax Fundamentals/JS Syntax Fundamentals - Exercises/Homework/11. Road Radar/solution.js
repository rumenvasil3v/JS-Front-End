function solve(driverSpeed, area) {
    let speedLimit = 0;
    
    switch (area) {
        case 'motorway': speedLimit = 130; break;
        case 'interstate': speedLimit = 90; break;
        case 'city': speedLimit = 50; break;
        case 'residential': speedLimit = 20; break;
    }
    
    const speedDifference = driverSpeed - speedLimit;
    
    let output;
    if (speedDifference <= 0) {
        output = `Driving ${driverSpeed} km/h in a ${speedLimit} zone`;
        return console.log(output);
    }
    
    let status;
    if (speedDifference > 40) {
        status = 'reckless driving';
    } else if (speedDifference > 20) {
        status = 'excessive speeding';
    } else if (speedDifference > 0) {
        status = 'speeding';
    }

    output = `The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
    console.log(output);
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');