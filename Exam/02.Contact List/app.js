window.addEventListener("load", solve);

function solve() {
    const inputNameElement = document.getElementById('name');
    const inputPhoneElement = document.getElementById('phone');
    const inputCategoryElement = document.getElementById('category');
    const addButtonElement = document.getElementById('add-btn');
    const unorderedList = document.getElementById('check-list');
    const unorderedListContact = document.getElementById('contact-list');

    const liElement = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.className = 'del-btn';

    const articleElement = document.createElement('article');
    const nameParagraph = document.createElement('p');
    const phoneParagraph = document.createElement('p');
    const categoryParagraph = document.createElement('p');

    const divElement = document.createElement('div');
    const editButtonElement = document.createElement('button');
    const saveButtonElement = document.createElement('button');

    divElement.className = 'buttons';
    editButtonElement.className = 'edit-btn';
    saveButtonElement.className = 'save-btn';

    const inputArray = [inputNameElement, inputPhoneElement, inputCategoryElement];

    addButtonElement.addEventListener('click', function () {
      nameParagraph.textContent = `name:${inputNameElement.value}`;
      phoneParagraph.textContent = `phone:${inputPhoneElement.value}`;
      categoryParagraph.textContent = `category:${inputCategoryElement.value}`;

      articleElement.appendChild(nameParagraph);
      articleElement.appendChild(phoneParagraph);
      articleElement.appendChild(categoryParagraph);

      liElement.appendChild(articleElement);
      divElement.appendChild(editButtonElement);
      divElement.appendChild(saveButtonElement);

      liElement.appendChild(divElement);

      unorderedList.appendChild(liElement);

      inputNameElement.value = '';
      inputPhoneElement.value = '';
      inputCategoryElement.value = '';
    });

    editButtonElement.addEventListener('click', function () {
      inputNameElement.value = nameParagraph.textContent.split(':')[1];
      inputPhoneElement.value = phoneParagraph.textContent.split(':')[1];
      inputCategoryElement.value = categoryParagraph.textContent.split(':')[1];

      liElement.parentElement.removeChild(liElement);
    });

    saveButtonElement.addEventListener('click', function () {
      liElement.parentElement.removeChild(liElement);

      divElement.remove();
      liElement.appendChild(deleteButton);

      unorderedListContact.appendChild(liElement);
    });

    deleteButton.addEventListener('click', function () {
      liElement.parentNode.removeChild(liElement);
    });
}