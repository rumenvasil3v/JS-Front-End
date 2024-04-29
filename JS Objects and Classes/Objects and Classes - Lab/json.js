let person = {
    name: 'Pesho',
    aeg: 20,
}

// Convert JS Object to JSON

const data = JSON.stringify(person, null, 5);

console.log(data); // It's a string JUST A STRING

// Convert from JSON to JS object
const javascriptObject = JSON.parse(data);
console.log(javascriptObject.name);