// // Async programming with Promises
// console.log('Before promise');

// const promiseExampleAsyncAction = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve(function(a, b) {
//             return a + b;
//         });
//     }, 2000);
// });

// promiseExampleAsyncAction.then(result => console.log(result(4, 5))).catch(err => console.log(err));

// console.log('After promise');

// const weddingPromise = new Promise((resolve, reject) => {
//     if (Math.random() < 0.3) {
//         return reject('Sorry! It\'s me');
//     }

//     setTimeout(function() {
//         resolve('Just married');
//     }, 2000);

// });

// weddingPromise.then(result => console.log(result)).catch(err => console.log(err));
// console.log(weddingPromise);

// console.log(weddingPromise);

// weddingPromise
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// Always rejecting promise
// const rejectedPromise = Promise.reject('The server is not responding!');
// console.log(rejectedPromise);
// rejectedPromise.catch(err => console.log(err));

//Always resolving promise
// const resolvedPromise = Promise.resolve(function() {
//     return 'The server returned the needed data';
// });
// console.log(resolvedPromise);
// resolvedPromise.then(result => console.log(result()));

// Multiple parallel promises
const timeoutPromise = function(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(message);
        }, time);
    });
}

const promiseAll = Promise.all([
    Promise.resolve('First Resolved Promise'),
    timeoutPromise('Second Promise', 2000),
    timeoutPromise('Third Promise', 1000),
    // Promise.reject('Rejected Promise'),
])

promiseAll 
    .then(data => console.log(data))
    .catch(err => console.log(err));