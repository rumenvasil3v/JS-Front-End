function loadCommits() {
    const userInputField = document.getElementById('username');
    const repoInputField = document.getElementById('repo');
    const unorderedListCommits = document.getElementById('commits');
    unorderedListCommits.textContent = '';

    const baseURL = `https://api.github.com/repos/${userInputField.value}/${repoInputField.value}/commits`;
    
    fetch(baseURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} (Not Found)`);
            }

            return response.json();
        })
        .then(resultJSONCommits => {
            for (const currentCommit of resultJSONCommits) {
                const liItem = document.createElement('li');

                const text = `${currentCommit.commit.author.name}: ${currentCommit.commit.message}`;
                liItem.textContent = text;

                unorderedListCommits.appendChild(liItem);
            }
        })
        .catch(error => {
            const liItem = document.createElement('li');

            liItem.textContent = error.message;

            unorderedListCommits.appendChild(liItem);
        });
}