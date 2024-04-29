function extractText() {
    const listItems = document.querySelectorAll('#items > li');
    const textArea = document.getElementById('result');

    const listItemsArray = [];

    for (const items of listItems) {
        const currentItem = items.textContent;
        listItemsArray.push(currentItem);
    }

    textArea.textContent = listItemsArray.join('\n');
}