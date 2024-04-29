function solve(age) {
    if (age < 0 || age > 122) {
        console.log('out of bounds');
    } else {
        let stageOfLife;
        if (age >= 0 && age <= 2) {
            stageOfLife = 'baby';
        } else if (age >= 3 && age <= 13) {
            stageOfLife = 'child';
        } else if (age >= 14 && age <= 19) {
            stageOfLife = 'teenager';
        } else if (age >= 20 && age <= 65) {
            stageOfLife = 'adult';
        } else {
            stageOfLife = 'elder';
        }

        console.log(stageOfLife);
    }
}

solve(20);
solve(1);
solve(100);
solve(-1);