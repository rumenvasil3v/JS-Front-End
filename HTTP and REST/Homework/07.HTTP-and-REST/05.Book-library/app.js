// function attachEvents() {
//     const titleInputElement = document.querySelector('input[type=text][name=title]');
//     const authorInputElement = document.querySelector('input[type=text][name=author]');
//     const submitButtonElement = document.querySelector('#form button');
//     const bookTableBodyElement = document.querySelector('#books tbody');

//     submitButtonElement.addEventListener('click', (e) => {
//         const bookTrElement = createBookElement(titleInputElement.value, authorInputElement.value);

//         bookTableBodyElement.appendChild(bookTrElement);

//         titleInputElement.value = '';
//         authorInputElement.value = '';
//     });

// }

// function createBookElement(title, author) {
//     const editButtonElement = document.createElement('button');
//     editButtonElement.textContent = 'Edit';
//     const deleteButtonElement = document.createElement('button');
//     deleteButtonElement.textContent = 'Delete';

//     const buttonsTdElement = document.createElement('td');
//     buttonsTdElement.appendChild(editButtonElement);
//     buttonsTdElement.appendChild(deleteButtonElement);

//     const titleTdElement = document.createElement('td');
//     titleTdElement.textContent = title;

//     const authorTdElement = document.createElement('td');
//     authorTdElement.textContent = author;

//     const bookTrElement = document.createElement('tr');
//     bookTrElement.appendChild(titleTdElement);
//     bookTrElement.appendChild(authorTdElement);
//     bookTrElement.appendChild(buttonsTdElement);

//     return bookTrElement;
// }

// attachEvents();

function submitBookToTheTable() {
    const inputElementTitleBook = document.querySelector('input[name="title"]');
    const inputElementAuthorOfBook = document.querySelector('input[name="author"]');
    const tbodyElement = document.getElementById('unique-table-body');

    const tableRow = createTableRowBookElement(inputElementTitleBook.value, inputElementAuthorOfBook.value);
    tbodyElement.appendChild(tableRow);

    inputElementTitleBook.value = '';
    inputElementAuthorOfBook.value = '';
}

function createTableRowBookElement(title, author) {
    const tableRow = document.createElement('tr');
    const tableDataTitle = document.createElement('td');
    const tableDataAuthor = document.createElement('td');
    const tableDataEditDeleteButtons = document.createElement('td');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    tableDataTitle.textContent = title;
    tableDataAuthor.textContent = author;

    editButton.textContent = 'Edit';
    deleteButton.textContent = 'Delete';

    tableDataEditDeleteButtons.appendChild(editButton);
    tableDataEditDeleteButtons.appendChild(deleteButton);

    tableRow.appendChild(tableDataTitle);
    tableRow.appendChild(tableDataAuthor);
    tableRow.appendChild(tableDataEditDeleteButtons);

    return tableRow;
}