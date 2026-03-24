var calculator = document.createElement("div");
calculator.className = "calculator";

var display = document.createElement("div");
display.className = "display";

var displayExpression = document.createElement("div");
displayExpression.className = "display-expression";
displayExpression.textContent = "";

var displayValue = document.createElement("div");
displayValue.className = "display-value";
displayValue.textContent = "0";

display.appendChild(displayExpression);
display.appendChild(displayValue);

var buttonGrid = document.createElement("div");
buttonGrid.className = "button-grid";

var buttons = [
  { label: "C",   type: "action",   value: "C"   },
  { label: "DEL", type: "action",   value: "DEL" },
  { label: "%",   type: "action",   value: "%"   },
  { label: "÷",   type: "operator", value: "÷"   },

  { label: "7",   type: "number",   value: "7"   },
  { label: "8",   type: "number",   value: "8"   },
  { label: "9",   type: "number",   value: "9"   },
  { label: "×",   type: "operator", value: "×"   },

  { label: "4",   type: "number",   value: "4"   },
  { label: "5",   type: "number",   value: "5"   },
  { label: "6",   type: "number",   value: "6"   },
  { label: "−",   type: "operator", value: "−"   },

  { label: "1",   type: "number",   value: "1"   },
  { label: "2",   type: "number",   value: "2"   },
  { label: "3",   type: "number",   value: "3"   },
  { label: "+",   type: "operator", value: "+"   },

  { label: "0",   type: "number",   value: "0"   },
  { label: ".",   type: "number",   value: "."   },
  { label: "=",   type: "equals",   value: "="   },
];

for (var i = 0; i < buttons.length; i++) {
  var btnData = buttons[i];

  var btn = document.createElement("button");
  btn.textContent    = btnData.label;
  btn.className      = "btn btn-" + btnData.type;
  btn.dataset.value  = btnData.value;

  buttonGrid.appendChild(btn);
}

calculator.appendChild(display);
calculator.appendChild(buttonGrid);
document.body.appendChild(calculator);

buttonGrid.addEventListener("click", function(event) {
  var clicked = event.target;

  if (!clicked.classList.contains("btn")) return;

  handleButtonPress(clicked.dataset.value);
});


var currentInput  = "0";
var operator      = "";
var firstNumber   = "";
var shouldReplace = false;

function updateDisplay() {
  displayValue.textContent = currentInput;
}

function handleButtonPress(value) {

  if (value === "C") {
    currentInput  = "0";
    operator      = "";
    firstNumber   = "";
    shouldReplace = false;
    displayExpression.textContent = "";
    updateDisplay();
    return;
  }

  if (value === "DEL") {
    if (currentInput.length > 1) {
      currentInput = currentInput.slice(0, -1);
    } else {
      currentInput = "0";
    }
    updateDisplay();
    return;
  }

  if (value === "=") {
    if (firstNumber === "" || operator === "") return;
    displayExpression.textContent = firstNumber + " " + operator + " " + currentInput + " =";
    var result    = calculate(firstNumber, operator, currentInput);
    currentInput  = String(result);
    operator      = "";
    firstNumber   = "";
    shouldReplace = true;
    updateDisplay();
    return;
  }

  if (value === "%") {
    currentInput = String(parseFloat(currentInput) / 100);
    updateDisplay();
    return;
  }


  if (value === "+" || value=== "−" || value === "×" || value === "÷") {
    firstNumber   = currentInput;
    operator      = value;
    displayExpression.textContent = firstNumber + " " + operator;
    shouldReplace = true;
    return;
  }

  if (shouldReplace) {
    currentInput  = value;
    shouldReplace = false;
  } else {
    if (currentInput === "0" && value !== ".") {
      currentInput = value;
    } else {
      if (value === "." && currentInput.includes(".")) return;
      currentInput = currentInput + value;
    }
  }

  updateDisplay();
}

function calculate(num1, op, num2) {
  var a = parseFloat(num1);
  var b = parseFloat(num2);
  if (op === "+") return a + b;
  if (op === "−") return a - b;
  if (op === "×") return a * b;
  if (op === "÷") {
    if (b === 0) return "Error";
    return a / b;
  }
  return 0;
}