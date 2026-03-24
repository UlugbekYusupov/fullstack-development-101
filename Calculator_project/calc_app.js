const root = document.getElementById("root");

// CARD
const card = document.createElement("div");
card.style.width = "320px";
card.style.margin = "50px auto";
card.style.padding = "20px";
card.style.borderRadius = "20px";
card.style.background = "#e6e0e0";
card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
root.appendChild(card);

// DISPLAY
const display = document.createElement("input");
display.type = "text";
display.disabled = true;
display.style.width = "100%";
display.style.height = "60px";
display.style.borderRadius = "10px";
display.style.border = "0.5 black";
display.style.marginBottom = "20px";
display.style.fontSize = "24px";
display.style.padding = "4px";
display.style.textAlign = "right";
card.appendChild(display);

// BUTTON CONTAINER (GRID)
const grid = document.createElement("div");
grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(4, 1fr)";
grid.style.gap = "10px";
card.appendChild(grid);

// BUTTONS
const buttons = [
  "C", "DEL", "%", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", ".", "="
];

// CREATE BUTTON FUNCTION
function createButton(text) {
  const btn = document.createElement("button");
  btn.innerText = text;
  btn.style.height = "60px";
  btn.style.border = "none";
  btn.style.borderRadius = "10px";
  btn.style.fontSize = "18px";
  btn.style.cursor = "pointer";

  // COLORS
  if (["C", "DEL", "%", "÷", "×", "-", "+"].includes(text)) {
    btn.style.background = "#ff8c00";
    btn.style.color = "white";
  } else if (text === "=") {
    btn.style.background = "#28a745";
    btn.style.color = "white";
  } else {
    btn.style.background = "#8f8b8b";
  }

  // BIG ZERO BUTTON
  if (text === "0") {
    btn.style.gridColumn = "span 2";
  }

  return btn;
}

// ADD BUTTONS
buttons.forEach(text => {
  const btn = createButton(text);
  grid.appendChild(btn);

  btn.addEventListener("click", () => handleClick(text));
});

// LOGIC
function handleClick(value) {
  if (value === "C") {
    display.value = "";
  } 
  else if (value === "DEL") {
    display.value = display.value.slice(0, -1);
  } 
  else if (value === "=") {
    try {
      let exp = display.value
        .replace(/÷/g, "/")
        .replace(/×/g, "*");

      display.value = eval(exp);
    } catch {
      display.value = "Error";
    }
  } 
  else {
    display.value += value;
  }
}
