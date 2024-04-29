function solve(text) {
    const regex = /\w+/g;
    const match = [...text.matchAll(regex)];
    console.log(match.join(', ').toUpperCase());
}

solve('filea.mp3 fileb.mp3 program.cs index.html styles.css filec.mp3');
solve('Hi, how are you?');
solve('hello');