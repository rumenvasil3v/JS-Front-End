function deleteByEmail() {
    // Get email from input field
    const inputElement = document.querySelector('input[name="email"]');
    
    // Get all table rows
    const tableRows = document.querySelectorAll('tbody tr > td:nth-child(2)');
    console.log(tableRows);
    
    // Get result container
    const resultContainer = document.getElementById('result');
    let isItFound = false;

    // Iterate through the elements and delete
    for (const element of tableRows) {
        if (element.textContent === inputElement.value) {
            element.parentNode.removeChild(element);
    
            isItFound = true;
            break;
        }
    }

    if (isItFound) {
        resultContainer.textContent = 'Deleted';
    } else {
        resultContainer.textContent = 'Not found.';
    }

    inputElement.value = '';
}