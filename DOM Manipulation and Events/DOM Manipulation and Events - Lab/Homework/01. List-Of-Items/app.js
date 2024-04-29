function addItem() {
    const inputFieldText = document.getElementById('newItemText');
    const unorderedList = document.getElementById('items');

    const newListItem = document.createElement('li');
    newListItem.textContent = inputFieldText.value;

    unorderedList.appendChild(newListItem);

    inputFieldText.value = '';
}