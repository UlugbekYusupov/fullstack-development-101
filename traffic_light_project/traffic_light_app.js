const root = document.getElementById("root");

// CONTAINER
const box = document.createElement("div");
box.style.width = "150px";
box.style.height = "400px";
box.style.background = "black";
box.style.margin = "50px auto";
box.style.borderRadius = "20px";
box.style.display = "flex";
box.style.flexDirection = "column";
box.style.alignItems = "center";
box.style.justifyContent = "space-around";
root.appendChild(box);

// CREATE LIGHT
function createLight() {
  const light = document.createElement("div");
  light.style.width = "80px";
  light.style.height = "80px";
  light.style.borderRadius = "50%";
  light.style.background = "gray";
  return light;
}

// LIGHTS
const red = createLight();
const yellow = createLight();
const green = createLight();

box.appendChild(red);
box.appendChild(yellow);
box.appendChild(green);

// FUNCTION TO RESET
function resetLights() {
  red.style.background = "gray";
  yellow.style.background = "gray";
  green.style.background = "gray";
}

// MAIN LOOP FUNCTION
function runTrafficLight() {
  // RED
  resetLights();
  red.style.background = "red";

  setTimeout(() => {
    // GREEN
    resetLights();
    green.style.background = "green";

    setTimeout(() => {
      // YELLOW
      resetLights();
      yellow.style.background = "yellow";

      setTimeout(() => {
        runTrafficLight(); // loop again
      }, 1000); // yellow time

    }, 2000); // green time

  }, 3000); // red time
}

// START
runTrafficLight();
