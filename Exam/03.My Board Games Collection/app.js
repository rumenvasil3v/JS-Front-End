const loadGamesElement = document.getElementById('load-games');
const divGamesListElement = document.getElementById('games-list');
const addGameButton = document.getElementById('add-game');
const inputGameName = document.getElementById('g-name');
const inputGameType = document.getElementById('type');
const inputGamePlayers = document.getElementById('players');
const editGameButton = document.getElementById('edit-game');

loadGamesElement.addEventListener('click', function () {
    fetch('http://localhost:3030/jsonstore/games')
    .then(response => response.json())
    .then(function (data) {
        for (const game of Object.values(data)) {
            const divBoardElement = document.createElement('div');
            divBoardElement.className = 'board-game';

            const divContentElement = document.createElement('div');
            divContentElement.className = 'content';

            const paragraphDivContentName = document.createElement('p');
            paragraphDivContentName.textContent = game['name'];

            const paragraphDivContentPlayers = document.createElement('p');
            paragraphDivContentPlayers.textContent = Number(game['players']);

            const paragraphDivContentType = document.createElement('p');
            paragraphDivContentType.textContent = game['type'];

            const divButtonsContainer = document.createElement('div');
            divButtonsContainer.className = 'buttons-container';

            const changeButtonElement = document.createElement('button');
            changeButtonElement.className = 'change-btn';
            changeButtonElement.textContent = 'Change';

            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.className = 'delete-btn';
            deleteButtonElement.textContent = 'Delete';

            divContentElement.appendChild(paragraphDivContentName);
            divContentElement.appendChild(paragraphDivContentPlayers);
            divContentElement.appendChild(paragraphDivContentType);

            divButtonsContainer.appendChild(changeButtonElement);
            divButtonsContainer.appendChild(deleteButtonElement);

            divBoardElement.appendChild(divContentElement);
            divBoardElement.appendChild(divButtonsContainer);

            divGamesListElement.appendChild(divBoardElement);

            changeButtonElement.addEventListener('click', function () {
                inputGameName.value = paragraphDivContentName.textContent;
                inputGameType.value = paragraphDivContentType.textContent;
                inputGamePlayers.value = paragraphDivContentPlayers.textContent;

                editGameButton.addEventListener('click', function () {
                    game['type'] = inputGameType.value;
                    game['players'] = inputGamePlayers.value;
    
                    console.log(inputGameType.value);
                    console.log(inputGamePlayers.value);
                    console.log(game['_id']);
    
                    fetch(`http://localhost:3030/jsonstore/games/${game['_id']}`, {
                        method: 'PUT',
                        headers: { 'Content-type': 'application/json' },
                        body: JSON.stringify(game),
                    })
    
                    paragraphDivContentType.textContent = game['type'];
                    paragraphDivContentPlayers.textContent = game['players'];
    
                    inputGameName.value = '';
                    inputGameType.value = '';
                    inputGamePlayers.value = '';
    
                    editGameButton.setAttribute('disabled', 'true');
                    addGameButton.removeAttribute('disabled');
                });

                addGameButton.setAttribute('disabled', 'false');
                editGameButton.removeAttribute('disabled');
            });

            deleteButtonElement.addEventListener('click', function() {
                fetch(`http://localhost:3030/jsonstore/games/${game['_id']}`, {
                    method: 'DELETE',
                })

                divBoardElement.remove();
            });
        }
    })
    .catch(err => console.log(err));
});

addGameButton.addEventListener('click', function () {
    const currentGame = {
        name: inputGameName.value,
        type: inputGameType.value,
        players: inputGamePlayers.value,
    }

    console.log(JSON.stringify(currentGame));

    fetch('http://localhost:3030/jsonstore/games', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(currentGame),
    });

    inputGameName.value = '';
    inputGameType.value = '';
    inputGamePlayers.value = '';

    const divBoardElement = document.createElement('div');
            divBoardElement.className = 'board-game';

            const divContentElement = document.createElement('div');
            divContentElement.className = 'content';

            const paragraphDivContentName = document.createElement('p');
            paragraphDivContentName.textContent = currentGame['name'];

            const paragraphDivContentPlayers = document.createElement('p');
            paragraphDivContentPlayers.textContent = Number(currentGame['players']);

            const paragraphDivContentType = document.createElement('p');
            paragraphDivContentType.textContent = currentGame['type'];

            const divButtonsContainer = document.createElement('div');
            divButtonsContainer.className = 'buttons-container';

            const changeButtonElement = document.createElement('button');
            changeButtonElement.className = 'change-btn';
            changeButtonElement.textContent = 'Change';

            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.className = 'delete-btn';
            deleteButtonElement.textContent = 'Delete';

            divContentElement.appendChild(paragraphDivContentName);
            divContentElement.appendChild(paragraphDivContentPlayers);
            divContentElement.appendChild(paragraphDivContentType);

            divButtonsContainer.appendChild(changeButtonElement);
            divButtonsContainer.appendChild(deleteButtonElement);

            divBoardElement.appendChild(divContentElement);
            divBoardElement.appendChild(divButtonsContainer);

            divGamesListElement.appendChild(divBoardElement);
});