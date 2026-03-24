const display = document.getElementById('display');

function appendToDisplay(input) {    
    if (display.value === "Xato" || display.value === "undefined") {
        display.value = input;
    } else {
        display.value += input;
    }
}
function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Xato";
    }
}