function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/messenger';

    // Get HTML elements
    const sendButton = document.getElementById('submit');
    const refreshButton = document.getElementById('refresh');
    const authorInputElement = document.querySelector('input[name="author"]');
    const contentInputElement = document.querySelector('input[name="content"]');
    const textArea = document.getElementById('messages');

    sendButton.addEventListener('click', function() {
        const message = {
            author: authorInputElement.value,
            content: contentInputElement.value,
        };

        fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                console.log(`Successfully created message`);
            })
            .catch(error => console.log(error));
    });

    refreshButton.addEventListener('click', function() {
        
        fetch(baseURL)
            .then(response => response.json())
            .then(messages => {

                let counter = 1;
                let messagesCount = Object.keys(messages).length;
                for (const message in messages) {
                    const messageAuthor = messages[message].author;
                    const messageContent = messages[message].content;

                    if (counter === messagesCount) {
                        textArea.value += `${messageAuthor}: ${messageContent}\n`.trimEnd();
                        break;
                    }

                    textArea.value += `${messageAuthor}: ${messageContent}\n`;

                    counter++;
                }
            });

    })
}

attachEvents();