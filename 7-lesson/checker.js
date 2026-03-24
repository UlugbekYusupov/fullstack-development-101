const inputField = document.getElementById('password');
const resultText = document.getElementById('status');

inputField.addEventListener('input', function(event) {
    const value = event.target.value;
    const len = value.length;

    if (len === 0) {
        resultText.value = "";
        resultText.style.backgroundColor = "white";
    } else if (len < 8) {
        resultText.value = "Weak";
        resultText.style.backgroundColor = "red";
    } else if (len >= 8 && len < 12) {
        resultText.value = "Medium";
        resultText.style.backgroundColor = "orange";
    } else {
        resultText.value = "Strong";
        resultText.style.backgroundColor = "green";
    }
});