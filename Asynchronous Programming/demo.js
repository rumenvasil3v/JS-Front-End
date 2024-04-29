const { log } = require("console");

function example(callback, time) {
    setTimeout(function () {
        callback('First Hello');
    }, time);

    console.log('Second Hello');
    console.log('Third Hello');
    console.log('I am doing something else while the async taks is running.');
}

example(a => console.log(a), 2000);