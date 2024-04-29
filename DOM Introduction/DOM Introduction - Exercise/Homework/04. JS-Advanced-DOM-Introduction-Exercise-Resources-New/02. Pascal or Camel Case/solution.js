function solve() {
	const errorMessage = 'Error!';
	const wrongCase = message => message; 


	const textToModify = document.getElementById('text').value;
	const textCase = document.getElementById('naming-convention').value;
	const resultField = document.getElementById('result');

	const arrayOfWords = textToModify.split(' ');

	switch (textCase) {
		case 'Camel Case':
			resultField.textContent = modifyText(modifyToCamelCase, arrayOfWords);
			break;
		case 'Pascal Case':
			resultField.textContent = modifyText(modifyToPascalCase, arrayOfWords);
			break;
		default:
			resultField.textContent = wrongCase(errorMessage);
			break;
	}

	function modifyText(callBackFunction, arrayOfWords) {
		return callBackFunction(arrayOfWords);
	}

	function modifyToCamelCase(arrayOfWords) {
		arrayOfWords[0] = arrayOfWords[0].toLowerCase();
		for (let index = 1; index < arrayOfWords.length; index++) {
			arrayOfWords[index] = arrayOfWords[index].toLowerCase();
			const word = arrayOfWords[index][0].toUpperCase() + arrayOfWords[index].substring(1);
	
			arrayOfWords[index] = word;
		}
	
		return arrayOfWords.join('');
	}

	function modifyToPascalCase(arrayOfWords) {
		for (let index = 0; index < arrayOfWords.length; index++) {
			arrayOfWords[index] = arrayOfWords[index].toLowerCase();
			const word = arrayOfWords[index][0].toUpperCase() + arrayOfWords[index].substring(1);
	
			arrayOfWords[index] = word;
		}
	
		return arrayOfWords.join('');
	}
}