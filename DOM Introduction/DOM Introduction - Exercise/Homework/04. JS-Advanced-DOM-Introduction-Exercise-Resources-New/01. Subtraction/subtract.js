function subtract() {
    const firstNumberField = document.getElementById('firstNumber');
    const firstNumber = Number(firstNumberField.value);

    const secondNumberField = document.getElementById('secondNumber');
    const secondNumber = Number(secondNumberField.value);

    const difference = firstNumber - secondNumber;

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = difference;
}