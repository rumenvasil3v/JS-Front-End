function solve(number) {
    let isSame = true;
    
    const textNumber = number.toString();
    if (textNumber.length % 2 === 0 && textNumber.length >= 2) {
        let leftPart = '';
        let rightPart = '';

        for (let i = 0; i <= (textNumber.length / 2) - 1; i++) {
            leftPart += textNumber[i];
        }

        for (let i = textNumber.length - 1; i >= textNumber.length / 2; i--) {
            rightPart += textNumber[i];
        }

        if (rightPart !== leftPart) {
            isSame = false;
        }

        const text = rightPart + leftPart;
        let sum = 0;

        for (let i = 0; i < textNumber.length; i++) {
            sum += Number(textNumber[i]);
        }

        console.log(isSame);
        console.log(sum);
    } else if (textNumber.length >= 2) {

        let leftPart = '';
        let rightPart = '';

        for (let i = 0; i <= Math.trunc((textNumber.length / 2) - 1); i++) {
            leftPart += textNumber[i];
        }

        for (let i = textNumber.length - 1; i >= Math.trunc((textNumber.length / 2) + 1); i--) {
            rightPart += textNumber[i];
        }

        if (rightPart !== leftPart) {
            isSame = false;
        }

        let digit = textNumber[Math.trunc((textNumber.length / 2))].toString();
        const text = rightPart + leftPart + digit;
        if (text !== textNumber) {
            isSame = false;
        }

        let sum = 0;

        for (let i = 0; i < textNumber.length; i++) {
            sum += Number(textNumber[i]);
        }

        console.log(isSame);
        console.log(sum);
    } else {
        console.log(isSame);
        console.log(number);
    }
}

solve(2222222);
solve(1234);
solve(3333333333);
solve(111111111);
solve(1);
solve(11);
solve(111);