// Async programming with callback functions
// console.log('First');

// callbackFunctionsAsync(function() {
//     console.log('Second1');
//     console.log('Second2');
//     console.log('Second3');
//     console.log('Second4');
//     console.log('Second5');
//     console.log('Second6');
    
//     callbackFunctionsAsync(function() {
//         console.log('Fourth1');
//         console.log('Fourth2');
//         console.log('Fourth3');
//     }, 10000);

//     console.log('Second7');
//     console.log('Second8');
//     console.log('Second9');
// }, 3000);

// console.log('Third');

// function callbackFunctionsAsync(callback, time) {
//     setTimeout(() => {
//         callback();
//     }, time);
// }

// console.log('Something');

console.log('My name is Rumen');
console.log('I am 17 years old');
console.log('I almost turn 18 years old');

function delayedStart(callback, time) {
    setTimeout(function() {
        callback();
    }, time);
}

delayedStart(function() {
    console.log('First Hello!');
}, 3000);

delayedStart(function() {
    console.log('Second Hello!');
}, 2000);

console.log('End');

console.log('Continue...');
console.log('Continue...');
console.log('Continue...');
console.log('Continue...');
console.log('Continue...');
console.log('Continue...');
console.log('Continue...');
console.log('Continue...');