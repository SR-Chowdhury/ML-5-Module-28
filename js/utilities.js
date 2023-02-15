function getInputFieldValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFloatValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFloatValue;
}

function getTextValue(textId) {
    const textField = document.getElementById(textId);
    const textFloatValue = parseFloat(textField.innerText);
    return textFloatValue;
}

function setValue(id, value) {
    const setId = document.getElementById(id);
    setId.innerText = value;
}