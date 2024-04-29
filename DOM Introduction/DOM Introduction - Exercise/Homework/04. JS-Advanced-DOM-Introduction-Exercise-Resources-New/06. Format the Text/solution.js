function solve() {
    const textAreaElement = document.getElementById('input');
	const resultDivElement = document.getElementById('output');
    const sentences = textAreaElement.value.split('.');

    const filteredArray = sentences.filter(x => x.length >= 1);
	console.log(filteredArray);
    
    for (let index = 0; index < filteredArray.length; index++) {
		filteredArray[index] = filteredArray[index] + '.';
	}

	let text = '';
	const numberOfParagraphs = Math.floor(filteredArray.length / 3);
	let startIndex = 0;
	let endIndex = 3;

	if (numberOfParagraphs > 0) {
		for (let index = 0; index < numberOfParagraphs; index++) {
			const sliced = filteredArray.slice(startIndex, endIndex);
			startIndex += 3;
			endIndex += 3;
	
			for (const sentence of sliced) {
				text += sentence;
			}
	
			resultDivElement.innerHTML += `<p>${text}</p>`;
			text = '';
		}

		for (let index = numberOfParagraphs * 3; index < filteredArray.length; index++) {
			text += filteredArray[index];
		}

		if (text) {
			resultDivElement.innerHTML += `<p>${text}</p>`;
			text = '';
		}
	} else {
		for (let index = 0; index < filteredArray.length; index++) {
			text += filteredArray[index];
		}

		resultDivElement.innerHTML += `<p>${text}</p>`;
		text = '';
	}
}