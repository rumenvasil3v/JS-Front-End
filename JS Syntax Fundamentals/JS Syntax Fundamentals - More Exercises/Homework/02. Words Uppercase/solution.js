function solve(text) {
    const regex = /\w+/g;
    const match = [...text.matchAll(regex)];
    console.log(match.join(', ').toUpperCase());
}

solve('Hi, how are you?');
solve('hello');