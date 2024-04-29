function solve(stringInJSONFormat) {
    const convertStringJSONToJavaScriptObject = JSON.parse(stringInJSONFormat);

    const result = Object.entries(convertStringJSONToJavaScriptObject);
    
    for (const obj of result) {
        const key = obj.shift();
        const value = obj.shift();

        const textOutput = `${key}: ${value}`;

        console.log(textOutput);
    }
}

// String in JSON Format
solve('{"name": "George", "age": 40, "town": "Sofia"}');