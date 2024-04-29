function editElement(element, match, replacer) {
    let text = element.textContent;
   
    while (text.includes(match)) {
        element.textContent = text.replace(match, replacer);

        text = element.textontent;C
    }
}