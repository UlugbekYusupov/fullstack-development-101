const lights = document.querySelectorAll(".light");

let current=0
setInterval(() => {
    // your logic here
    lights.forEach(light => light.classList.remove("active"));
    lights[current].classList.add("active");
    current++;
    if (current === lights.length) {
        current = 0;
    }

}, 2000);
