function calc() {
    // TODO: sum = num1 + num2
    const firstNumberField = document.getElementById('num1');
    const firstNumber = Number(firstNumberField.value);

    const secondNumberField = document.getElementById('num2');
    const secondNumber = Number(secondNumberField.value);

    const sum = firstNumber + secondNumber;

    const resultInputField = document.querySelector('#sum');
    resultInputField.value = sum;
}
