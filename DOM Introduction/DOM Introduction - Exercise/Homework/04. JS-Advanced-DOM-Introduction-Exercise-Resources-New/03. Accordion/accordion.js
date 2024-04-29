function toggle() {
    const button = document.getElementsByClassName('button');
    const divElementToReveal = document.getElementById('extra');
    console.log(button);
    console.log(divElementToReveal);

    if (button.textContent === 'MORE') {
        divElementToReveal.style.display = 'block';
        button.textContent = 'LESS';
    } else if (button.textContent === 'LESS') {
        divElementToReveal.style.display = 'none';
        button.textContent = 'MORE';
    }
}