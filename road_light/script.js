const lights = ["red", "yellow", "green"];
let index = 2;

function updateLight() {
  lights.forEach(color => {
    document.querySelector(`.${color}`).classList.remove("active");
  });

  index = (index + 1) % lights.length;

  document.querySelector(`.${lights[index]}`).classList.add("active");
}

setInterval(updateLight, 1500);