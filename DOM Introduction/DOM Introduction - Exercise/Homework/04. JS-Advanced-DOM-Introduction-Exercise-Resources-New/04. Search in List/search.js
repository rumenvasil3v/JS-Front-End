function search() {
    const listItems = document.getElementsByTagName('ul')[0].childNodes;
    const inputFieldText = document.getElementById('searchText').value;
    
    for (const item of listItems) {
        item.style = 'text-decoration: none; font-weight: normal;'
    }

    let matchesCount = 0;
    
    for (const item of listItems) {
        if (item.textContent.includes(inputFieldText)) {
            item.style = 'text-decoration: underline; font-weight: bold;';
            matchesCount++;
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${matchesCount} matches found</p>`;
}