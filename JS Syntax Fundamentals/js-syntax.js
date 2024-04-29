// Decalring variables with var  -> obsolete before ES2015
var isTrue = true;
var pesho = 'Pesho';
var number = 200;

console.log(isTrue);
console.log(pesho);

let secondNumber = 100;
console.log(number + secondNumber);

// Decalring variables with let  -> nowadays trend

let isFalse = true;
let notPesho = 'Not Pesho';
let notNumber = 'Not 100';

console.log(isFalse);
console.log(notPesho);
console.log(notNumber);

console.log(undefined + 'Hello');

// Declaring variables with const -> when the value will stay the same
const me = 'Rumen :) Not changeable';

console.log(me); // constant variable

// Conditional Statements 
if (me) {
    console.log('I am valid');
} else {
    console.log('I am not valid :(');
}

if (number < 100) {
    console.log('Number is less than 100');
} else if (number < 200) {
    console.log('Number is less than 200');
} else {
    console.log('Number is greater than or equal to 200');
}

// Function Declaration
function exponentiation(a, b, ...rest) {
    let result = a ** b;

    console.log(result);
    console.log(rest);
}

// Function invokation
exponentiation(2, 10, 'I', 'am', 'Gosho', '!');

// Printing on the console concatenation
const myName = 'Rumen';
const myAge = 17;

const composedText = 'Hello' + ', my name is ' + myName + ' and I am ' + myAge + ' years old!';
console.log(composedText);

// Printing on the console with template string

const templateString = `Hello, my name is ${myName} and I am ${myAge} years old!`
console.log(templateString);

// Formating a number after the decimal point
const k = 2.378910;
console.log(k.toFixed(3));

// Rounding a number
const i = 3.6;
console.log(Math.round(i));

// Data Types and Variables