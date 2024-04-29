const swapiURL = 'https://swapi.dev/api';
const baseURL = 'http://localhost:3030';

// function makeRequest() {
//     const responsePromise = fetch(`${swapiURL}/people/4`)
    
//     const jsonFormat = responsePromise.then(response => response.json()).catch(err => console.log('The server is not responding right now! Try later!'));
//     jsonFormat.then(jsonFormatData => console.log(jsonFormatData)).catch(err => console.log('The given text is in xml format!'));
// }

// makeRequest();

// GET Request to the local server of the resource books
// fetch(`${baseURL}/jsonstore/books`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// POST Request to the local server of the resource books
// function createBook(name, author) {
//     const book = {
//         name,
//         author,
//     }

//     return book;
// }

// const book = createBook('Harry Potter', 'Rowling');

// const responsePromise = fetch(`${baseURL}/jsonstore/books`,{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
// });

// const jsonPromise = responsePromise.then(response => response.json());
// jsonPromise.then(data => console.log(data));


fetch(`${baseURL}/jsonstore/books`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));


// Edit Book PUT Request to the local server of the resource books/:id-book

// const bookId = 'd7d283d4-a4b8-436d-890a-16a867508c9e';

// fetch(`${baseURL}/jsonstore/books/${bookId}`, {
//     method: 'PUT',
//     headers: {
//         'content-type': 'application/json',
//     },
//     body: JSON.stringify({
//         name: 'Lord Of The Rings: The Two Towers',
//         author: 'Tolkien',
//         _id: bookId,
//     }),
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// fetch(`${baseURL}/jsonstore/books/${bookId}`, {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         name: 'Lord Of The Rings: The Fellowship Of The Ring',
//         author: 'Tolkien',
//         _id: bookId,
//     }), 
// });

// DELETE Request to the local server of the resource books/:id-book
fetch(`${baseURL}/jsonstore/books/71627df2-a4a7-4dec-a83a-38bd3ac8705e`, {
    method: 'DELETE',
})