// Small label above the box 
var label = document.createElement("p");
label.className   = "traffic-label";
label.textContent = "Traffic Light";


// The black vertical box 
var trafficBox = document.createElement("div");
trafficBox.className = "traffic-box";


// RED light circle (top)
var redLight = document.createElement("div");
redLight.className = "light light-red";   


// YELLOW light circle (middle) 
var yellowLight = document.createElement("div");
yellowLight.className = "light light-yellow";


// GREEN light circle (bottom) 
var greenLight = document.createElement("div");
greenLight.className = "light light-green";


// Status text below the box
var statusText = document.createElement("p");
statusText.className   = "status-text";
statusText.textContent = "";

// Put the three lights inside the black box
trafficBox.appendChild(redLight);
trafficBox.appendChild(yellowLight);
trafficBox.appendChild(greenLight);
document.body.appendChild(label);
document.body.appendChild(trafficBox);
document.body.appendChild(statusText);

// Helper function: turn ALL lights off 
function turnAllOff() {
  redLight.classList.remove("active");
  yellowLight.classList.remove("active");
  greenLight.classList.remove("active");
  statusText.classList.remove("red", "yellow", "green");
}


// ── Step A: Show RED light ──
function showRed() {
  turnAllOff();
  redLight.classList.add("active");
  statusText.textContent = "STOP";
  statusText.classList.add("red");

  setTimeout(showYellow, 3000);
}


// Step B: Show YELLOW light 
function showYellow() {

  turnAllOff();

  yellowLight.classList.add("active");

  statusText.textContent = "READY";
  statusText.classList.add("yellow");

  setTimeout(showGreen, 1000);
}


// Step C: Show GREEN light 
function showGreen() {

  turnAllOff();

  greenLight.classList.add("active");

  statusText.textContent = "GO";
  statusText.classList.add("green");
  setTimeout(showRed, 3000);
}


// START the traffic light cycle 
showRed();