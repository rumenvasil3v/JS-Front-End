function extract(content) {
    const paragraph = document.getElementById(content);
    let text = paragraph.textContent;

    const pattern = /\([A-Za-z ]+\)/g;

    const resultArray = [];
    let match = pattern.exec(text);

    while (match) {
        const currentMatch = match[0];
        resultArray.push(currentMatch);

        match = pattern.exec(text);
    }

    return resultArray.join('; ');
}