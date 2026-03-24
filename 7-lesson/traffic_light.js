const redLight = document.querySelector('.red');
const yelLight = document.querySelector('.yel');
const greLight = document.querySelector('.gre');

function startTrafficLight() {
    function clearLights() {
        redLight.classList.remove('active-red');
        yelLight.classList.remove('active-yel');
        greLight.classList.remove('active-gre');
    }

    clearLights();
    greLight.classList.add('active-gre');

    setTimeout(() => {
        clearLights();
        yelLight.classList.add('active-yel');
    }, 3000);

    setTimeout(() => {
        clearLights();
        redLight.classList.add('active-red');
    }, 4000);

    setTimeout(() => {
        clearLights();
        yelLight.classList.add('active-yel');
    }, 6000);
}

startTrafficLight();
setInterval(startTrafficLight, 8000);