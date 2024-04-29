function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/phonebook';

    // Get HTML Elements
    const loadButton = document.getElementById('btnLoad');
    const phoneBook = document.getElementById('phonebook');
    const createButton = document.getElementById('btnCreate');
    const personInputElement = document.getElementById('person');
    const phoneInputElement = document.getElementById('phone');

    loadPhoneEntries();
    createPhoneEntry();

    function loadPhoneEntries() {
        loadButton.addEventListener('click', function() {
        
            fetch(baseURL)
                .then(response => response.json())
                .then(phoneEntries => {
                    for (const phoneEntry in phoneEntries) {

                        const liItem = document.createElement('li');
                        const deleteButton = document.createElement('button');
                        deleteButton.textContent = 'Delete';
    
                        const personName = phoneEntries[phoneEntry].person;
                        const personPhone = phoneEntries[phoneEntry].phone;
                        console.log(phoneBook.children);
    
                        const textForLiItem = `${personName}: ${personPhone}`;
                        liItem.textContent = textForLiItem;
                        liItem.appendChild(deleteButton);

                        if (Array.from(phoneBook.children).find(li => li.textContent === liItem.textContent)) {
                            continue;
                        }
    
                        phoneBook.appendChild(liItem);
    
                        deleteButton.addEventListener('click', function() {
    
                            fetch(`${baseURL}/${phoneEntry}`, {
                                method: 'DELETE',
                            })

                            liItem.remove();
                        });

                    }
                });
        });
    }

    function createPhoneEntry() {
        createButton.addEventListener('click', function() {
            const phoneEntry = {
                person: personInputElement.value,
                phone: phoneInputElement.value,
            };

            fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(phoneEntry),
            })
                .then(response => {
                    return response.json();
                })
                .then(result => {
                    const liItem = document.createElement('li');
                        const deleteButton = document.createElement('button');
                        deleteButton.textContent = 'Delete';
    
                        const personName = result.person;
                        const personPhone = result.phone;
    
                        const textForLiItem = `${personName}: ${personPhone}`;
    
                        liItem.textContent = textForLiItem;
                        liItem.appendChild(deleteButton);
    
                        phoneBook.appendChild(liItem);
    
                        deleteButton.addEventListener('click', function() {
    
                            fetch(`${baseURL}/${result._id}`, {
                                method: 'DELETE',
                            })

                            liItem.remove();
                        });
                })
                .catch(error => console.log(error));

                phoneBook.textContent = '';

            personInputElement.value = '';
            phoneInputElement.value = '';
        });
    }
}

attachEvents();