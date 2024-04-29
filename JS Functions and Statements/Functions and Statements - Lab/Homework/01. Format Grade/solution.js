const getGrade = function (grade) {
    let result = '';
    
    if (grade < 3) {
        result = `Fail (2)`;
    } else if (grade < 3.50) {
        result = `Poor (${grade})`;
    } else if (grade < 4.50) {
        result = `Good (${grade})`;
    } else if (grade < 5.50) {
        result = `Very Good (${grade})`;
    } else if (grade <= 6) {
        result = `Excellent (${grade})`;
    }

    return result;
}

function solve(grade) {

    const getGrade = function (grade) {
        let result = '';
        
        if (grade < 3) {
            result = `Fail (2)`;
        } else if (grade < 3.50) {
            result = `Poor (${grade})`;
        } else if (grade < 4.50) {
            result = `Good (${grade})`;
        } else if (grade < 5.50) {
            result = `Very good (${grade})`;
        } else if (grade <= 6) {
            result = `Excellent (${grade})`;
        }
    
        return result;
    }

    const output = getGrade(grade.toFixed(2)); 

    console.log(output);
}

solve(3.33);
solve(4.50);
solve(2.99);
solve(2.33);