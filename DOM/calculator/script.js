const resultInput = document.getElementById("resultInput");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        handleInput(value);
    });
});

function handleInput(value) {
    if (value === "C") {
        resultInput.value = "";
    } else if (value === "DEL") {
        resultInput.value = resultInput.value.slice(0, -1);
    } else if (value === "=") {
        calculate();
    } else {
        // Prevent multiple dots in one number
        if (value === "." && resultInput.value.includes(".")) {
            // Check if there's an operator after the last dot
            const lastPart = resultInput.value.split(/[\+\−×/]/).pop();
            if (lastPart.includes(".")) return;
        }
        
        // Handle initial zero
        if (resultInput.value === "0" && value !== ".") {
            resultInput.value = value;
        } else {
            resultInput.value += value;
        }
    }
}

function calculate() {
    try {
        let expression = resultInput.value
            .replace(/×/g, "*")
            .replace(/−/g, "-");
        
        // Safety check: only allow digits and operators
        if (!/^[\d\+\-\*\/\.\s\(\)%]+$/.test(expression)) {
            throw new Error("Invalid characters");
        }

        // Handle percentage
        expression = expression.replace(/(\d+)%/g, "($1/100)");

        const result = eval(expression);
        
        if (isNaN(result) || !isFinite(result)) {
            resultInput.value = "Error";
        } else {
            // Round to 8 decimal places to avoid float issues
            resultInput.value = Math.round(result * 100000000) / 100000000;
        }
    } catch (error) {
        resultInput.value = "Error";
        setTimeout(() => { resultInput.value = ""; }, 1500);
    }
}

// Add keyboard support
document.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9" || e.key === ".") handleInput(e.key);
    if (e.key === "+" || e.key === "-") handleInput(e.key === "-" ? "−" : "+");
    if (e.key === "*") handleInput("×");
    if (e.key === "/") handleInput("/");
    if (e.key === "Enter" || e.key === "=") handleInput("=");
    if (e.key === "Backspace") handleInput("DEL");
    if (e.key === "Escape") handleInput("C");
});