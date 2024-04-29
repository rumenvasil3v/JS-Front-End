function loadRepos() {
	const inputField = document.getElementById('username');
	const unorderedList = document.getElementById('repos');
	unorderedList.textContent = '';

	const baseURL = `https://api.github.com/users/${inputField.value}/repos`;
	
	fetch(baseURL, {
		headers: {
			'User-Agent': 'request',
		},
	})
		.then(response => {
			
			if (!response.ok) {
				throw new Error(`You've made a mistake in your request. (${response.status})`)
			}

			return response.json();
		})
		.then(function(repos) {
			for (const repo of repos) {
				const liItem = document.createElement('li');
				const anchorItem = document.createElement('a');

				anchorItem.textContent = repo.full_name;
				anchorItem.href = repo.html_url;
				
				liItem.appendChild(anchorItem);

				unorderedList.appendChild(liItem);
			}
		})
		.catch(error => {
			const li = document.createElement('li');
			li.textContent = error.message;

			unorderedList.appendChild(li);
		});

	inputField.value = '';
}