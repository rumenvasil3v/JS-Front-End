function loadRepos() {
   const baseURL = 'https://api.github.com/users/testnakov/repos';
   const divElement = document.getElementById('res');

   fetch(baseURL)
      .then(response => response.text())
      .then(result => {
         divElement.textContent = result;
      });
}