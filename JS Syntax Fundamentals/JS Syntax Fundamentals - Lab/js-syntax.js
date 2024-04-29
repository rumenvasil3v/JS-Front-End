
// Declaring  variables
let a = 50;
let b = 100;
let c = a + b;
console.log(c);

// used before ES2015 - legacy
var notRecommendedUsingVar = "Not recommeded using var"; 

// constant variable
const ivan = "Ivan"; 

if (b > a) {
    console.log("b is greater than a");
} else {
    console.log("a is greater than b");
}

// Functions
    // Function Declaration
function addTwoNumbers(firstNumber, secondNumber) {
    firstNumber + secondNumber;
}

    // Function Invokation
addTwoNumbers(10, 20);

// Printing to the Console
    // --> Interpolation printing
function personDataInterpolationPrint (personName, personAge) {
    console.log(`This is ${personName}, who is ${personAge} years old!`);
}

personDataInterpolationPrint('Gosho', 23); // This is Gosho, who is 23 years old!


    // --> Concatenation printing
function personDataConcatenationPrint (personName, personAge) {
    console.log('This is ' + personName + ', who is ' + personAge + ' years old!');
}

personDataConcatenationPrint('Pesho', 24); // // This is Pesho, who is 24 years old!

// Formating a number
function formatANumber (randomNumber) {
    console.log(randomNumber.toFixed(4));
}

formatANumber(5.333345555);
formatANumber(5.333355555);
formatANumber(5.29999);

// Rounding a number
function roundANumber (randomNumber) {
    console.log(Math.round(randomNumber))
}

roundANumber(4.555); // 5
roundANumber(5.1); // 5
roundANumber(1.8); // 2
roundANumber(1.0); // 1
roundANumber(1.9); // 2

let number = 10; // Number
console.log(number); // 10

let person = {name: 'George', age: 25}; // Object
console.log(person); // {name: 'George', age: 25}

let array = [1, 2, 3]; // Array
console.log(array); // [1, 2, 3]

let isTrue = true; // Boolean
console.log(isTrue); // true

let firstName = 'George'; // String
console.log(firstName); // George

let empty = null; // null
console.log(empty); // null
empty = 'Not empty';
console.log(empty);
console.log(typeof empty);

let unknown; // undefined 
console.log(unknown); // undefined
unknown = 10;
console.log(unknown);
console.log(typeof unknown);

// Variable scope
function multiply (a, b) {
    console.log(a * b * x);
}

    // var scope -> can be accessed anywhere in the function, including outside the initial block
{
    var x = 20;
}
console.log(x);

    // let and const scope -> use block scope – when declared inside a block {} can NOT be accessed from outside the block
{
    const pesho = 'Pesho';
    let number = 5;

    console.log(number);
    console.log(pesho);

    function printPesho () {
        console.log(`This is ${pesho}`);
    }

    printPesho();

}

multiply (3, 3);

// Let, var and const example
{
    var y = 100;
}

{
    let d = 100;
    const pi = 3.14;
}

function subtract(n , i) {
    console.log(((n + i) - y)); // Eror
}

subtract(52, 50);

// Variable Comparison let vs const
    //let
    // -> can be reassdigned after initial assignment
    // -> variable's value can change
    // let is used when reassignment is necessary

    //const
    // -> cannot be reassigned after initial assignment, remains constant
    // -> variable's value remains fixed
    // const is used when variable will not be reassigned

// Conditional Statements
    // Implementing Control-FLow Logic

    // Arithmetic Operators
    const constA = 15;
    const constB = 5;
    let variableC;
    c = a + b; // 20
    c = a - b; // 10
    c = a * b; // 75
    c = a / b; // 3
    c = a % b; // 0
    c = a ** b;//15^5 -> 759375c
console.log(c);

    // Comparison Operators

console.log(1 == '1'); // true
console.log(1 === '1'); // false
console.log(3 != '3'); // false
console.log(3 !== '3'); // true
console.log(5 < 5.5); // true
console.log(5 <= 4); // false
console.log(2 > 1.5); // true
console.log(2 >= 2); // true
console.log((5 > 7) ? 4 : 10); // 10

// What is a Conditional Statement?
    // The if-else statement
        // Do action depending on condition
let o = 1;
if (o >= 5) {
    console.log(o);
} else {
    console.log('no');
}

// Logical Operators
let k = 3;
let n = -2;
console.log(k > 0 && n > 0); 

// Truthy and Falsy Values
function logTruthiness(val) {
    if (val) {
        console.log('Truthy!');
    } else {
        console.log('Falsy.');
    }
}

let undefinedValue;
logTruthiness(''); // Falsy.
logTruthiness(4); // Truthy!
logTruthiness(undefinedValue); // Falsy.
logTruthiness(null); // Falsy.
logTruthiness(0n); // Falsy.
logTruthiness(0); // Falsy.
logTruthiness(false); // Falsy.
logTruthiness (3.14); //Truthy!
logTruthiness ({}); //Truthy!
logTruthiness (NaN); //Falsy.
logTruthiness ("NaN"); //Truthy!
logTruthiness ([]); //Truthy!
logTruthiness (null); //Falsy.
logTruthiness (""); //Falsy.
logTruthiness (undefined); //Falsy.
logTruthiness (0); // Falsy

// Loops -> Code Block Repetition
function certainTimesRepetition() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

certainTimesRepetition();

function untilConditionIsMetRepetition() {
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
}

untilConditionIsMetRepetition();

// Undefined and Null
    // Undefined
let undefinedVariable; // a variable without a value has the value undefined
    // Null

let nullVariable = null; // null 'nothing'. It is supposed to be something that doesn't exist
console.log(nullVariable);
console.log(typeof nullVariable);

console.log(null === undefined);
console.log(null == undefined);

// Debugging Techniques