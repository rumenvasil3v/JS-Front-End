function colorize() {
    const tableRows = document.querySelectorAll('tr:nth-child(even)');

    for (const tableRow of tableRows) {
        tableRow.style = 'background-color: teal';
    }
}