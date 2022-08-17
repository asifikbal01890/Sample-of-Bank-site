// advance javascript1
function getInputElementValueById(elementId){
    const newInputElement = document.getElementById(elementId);
    const newInputElementtString = newInputElement.value;
    const newInputValue = parseFloat(newInputElementtString);
    newInputElement.value = '';
    return newInputValue;
}
function getTextElementValueById(elementId){
    const newTexttElement = document.getElementById(elementId);
    const newTexttElementtString = newTexttElement.innerText;
    const newTexttValue = parseFloat(newTexttElementtString);
    return newTexttValue;
}
function setTextElementValueById(elementId, newValue){
    const TextElement = document.getElementById(elementId);
    TextElement.innerText = newValue;
}