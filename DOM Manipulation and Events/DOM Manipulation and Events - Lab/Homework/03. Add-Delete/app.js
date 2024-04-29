function addItem() {
    const inputFieldText = document.getElementById('newItemText');
    const unorderedList = document.getElementById('items');

    const newListItem = document.createElement('li');
    newListItem.textContent = inputFieldText.value;

    unorderedList.appendChild(newListItem);

    inputFieldText.value = '';    

    const createLink = document.createElement('a');
    createLink.href = '#';
    createLink.textContent = '[Delete]';
    newListItem.appendChild(createLink);

    createLink.addEventListener('click', function() {
        const parentNodeListItem = createLink.parentNode;
        const parentNodeOfListItem = parentNodeListItem.parentNode;
        parentNodeOfListItem.removeChild(parentNodeListItem);
    });
}