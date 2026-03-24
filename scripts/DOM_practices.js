const mainContainer = document.createElement('div');

// // Main container
const title = document.createElement('h1');
const cardsParent = document.createElement('div')

// title

title.textContent = "Interactive To Do List";
title.classList.add('fw-bold', 'text-dark', 'mb-3');

// Cards parent

cardsParent.classList.add('my-2', 'mx-3');


// cards

let tasks = [
    { id: 1, title: "Task 1", description: "Description for Task 1", status: "pending" },
    { id: 2, title: "Task 2", description: "Description for Task 2", status: "in progress" },
    { id: 3, title: "Task 3", description: "Description for Task 3", status: "completed" }
];

// ─── renderTasks: renders all tasks into cardsParent ─────────────────────── (this task done by agility)
function renderTasks() {

    // Clear existing cards before re-rendering
    cardsParent.innerHTML = '';

    tasks.forEach(task => {

        const card = document.createElement('div');
        card.classList.add(
            'd-flex',
            'justify-content-between',
            'align-items-center',
            'p-3',
            'mb-3',
            'shadow-sm',
            'rounded',
            'bg-light', 'w-75', 'mx-auto'
        );

        // Card text parent
        const cardTextContainer = document.createElement('div');
        cardTextContainer.classList.add('text-start');

        // Card Title
        const cardTitle = document.createElement('h4');
        cardTitle.textContent = task.title;
        cardTitle.classList.add('mb-0', 'fw-bolder');

        // Card description
        const cardDesc = document.createElement('p');
        cardDesc.textContent = task.description;
        cardDesc.classList.add('mb-0', 'fw-medium', 'text-muted');

        // Delete button
        const cardBtn = document.createElement('button');
        cardBtn.textContent = 'Delete';
        cardBtn.classList.add('btn', 'btn-danger', 'border', 'rounded-2', 'py-1', 'px-3',
            'text-white', 'mt-1');

        cardBtn.addEventListener('click', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            renderTasks(); // re-render after deletion
        });

        cardTextContainer.append(cardTitle, cardDesc, cardBtn);

        // Card Status badge
        const cardStatus = document.createElement('p');
        cardStatus.textContent = task.status;
        cardStatus.classList.add('px-3', 'py-1', 'rounded-pill', 'text-white', 'mb-0');

        // Color the status badge based on value
        function cardStatusColorChanger(badge, status) {
            if (status === 'pending') badge.classList.add('bg-warning');
            if (status === 'in progress') badge.classList.add('bg-primary');
            if (status === 'completed') badge.classList.add('bg-success');
        }

        cardStatusColorChanger(cardStatus, task.status);

        card.append(cardTextContainer, cardStatus);
        cardsParent.append(card);
    });
}

// Initial render
renderTasks();

// Add task button

const addTaskBtn = document.createElement("button");
addTaskBtn.textContent = "Add Task";
addTaskBtn.classList.add('btn', 'btn-primary', 'w-75', 'mx-auto', 'd-block');

// // modal
const modal = document.createElement("div");
modal.classList.add('modal', 'fade');

modal.innerHTML = `
<div class="modal-dialog">
    <div class="modal-content p-3">

        <h4 class="text-center fw-bold mb-3">Add Task</h4>

        <input 
        type="text"
        class="form-control mb-3"
        placeholder="Task Title"
        id="taskTitleInput"
        >

        <textarea 
        class="form-control mb-3"
        placeholder="Task Description"
        id="taskDescInput"
        rows="3"
        ></textarea>

        <select class="form-select mb-3" id="taskStatusInput">
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
        </select>

        <button class="btn btn-primary w-100 mb-2" id="saveTaskBtn">
        Save Task
        </button>

        <button class="btn btn-danger w-100" data-bs-dismiss="modal">
        Close
        </button>

    </div>
</div>`;

document.body.append(modal);

// modal tugmalari funksiyalari

const saveBtn = document.getElementById("saveTaskBtn");

saveBtn.addEventListener("click", () => {

    const title = document.getElementById("taskTitleInput").value;
    const description = document.getElementById("taskDescInput").value;
    const status = document.getElementById("taskStatusInput").value;

    const newTask = {
        id: Date.now(),
        title: title,
        description: description,
        status: status
    };

    tasks.push(newTask);
    renderTasks(); // re-render so the new task appears immediately

    const modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();

    console.log(tasks);

});

// Add bosilganda modalni chiqishi
addTaskBtn.addEventListener("click", () => {
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
});


mainContainer.append(title, cardsParent, addTaskBtn);
mainContainer.classList.add('container', 'my-5', 'text-center', 'marginBottom')


// elementlarni DOMga qo'shish
document.body.append(mainContainer);


// Practice 2

const mainPasswordContainer = document.createElement('div');
mainPasswordContainer.classList.add("container", "w-75", "mx-auto", "my-5", 'text-center');

// Title
const practice2Title = document.createElement('h1');
practice2Title.classList.add('title');
practice2Title.textContent = 'Password Strength Checker';

// Password input
const passwordInput = document.createElement('input');
passwordInput.type = "password";
passwordInput.placeholder = "Enter password";
passwordInput.classList.add('w-75', 'mx-auto', 'form-control', 'form-control-lg',
    'border-primary', 'rounded-3');

// Password chacker badge
const resultBadge = document.createElement("div");
resultBadge.classList.add("text-center", "mt-3", "d-inline-block", "px-3", "py-1");

// Password cheker 
passwordInput.addEventListener("input", () => {

    const password = passwordInput.value;

    const strength = checkPassword(password);

    resultBadge.textContent = strength;

    resultBadge.classList.remove("bg-danger", "bg-warning", "bg-success", "text-white", "px-3", "py-2", "rounded");

    if (strength === "Weak") {
        resultBadge.classList.add("bg-danger", "text-white", "px-3", "py-2", "rounded");
    }

    else if (strength === "Medium") {
        resultBadge.classList.add("bg-warning", "text-white", "px-3", "py-2", "rounded");
    }

    else {
        resultBadge.classList.add("bg-success", "text-white", "px-3", "py-2", "rounded");
    }

});

function checkPassword(password) {

    let hasLength = password.length >= 8;

    let hasUpperCase = false;
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        }
    }

    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    let hasSpecial = false;
    let specialChars = "!@#$%^&_*";

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        for (let j = 0; j < specialChars.length; j++) {
            if (char === specialChars[j]) {
                hasSpecial = true;
            }
        }
    }

    let score = 0;
    if (hasLength) score++;
    if (hasUpperCase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    if (score === 4) {
        return "Strong";
    } else if (score >= 2) {
        return "Medium";
    } else {
        return "Weak";
    }
}


// Main container pushher
mainPasswordContainer.append(practice2Title, passwordInput, resultBadge);

// Body pushher
document.body.append(mainPasswordContainer);

// // // _____________ Practice 3 ___________________

const practice3Container = document.createElement('div');
practice3Container.classList.add('container', 'text-center', 'w-25', 'mx-auto', 'mb-5', 'bg-muted');

// main screen
const calcScreen = document.createElement("div");

calcScreen.classList.add("calculator-screen", "p-3", "rounded-3", "mb-4", 'border-2',
    'border-primary');

const display = document.createElement("input");
display.type = "text";
display.value = "0";
display.classList.add("form-control", "text-end", "fs-3", "border-1", 'border-primary',
    "bg-transparent");

calcScreen.append(display);

// First row
const firstRow = document.createElement('div');
firstRow.classList.add('row', 'g-3', 'my-1', 'fw-bolder', 'bottom_font_size');

// C button
const clean = document.createElement('div');
const cleanElement = document.createElement('button');
clean.classList.add('col-3');
cleanElement.classList.add('card', 'text-center', 'p-3', 'bg-warning', 'text-white', 'w-100', 'btn');
cleanElement.textContent = 'C';
clean.append(cleanElement);

// DEL button
const del = document.createElement('div');
const delElement = document.createElement('button');
del.classList.add('col-3');
delElement.classList.add('card', 'text-center', 'p-3', 'bg-warning', 'text-white', 'w-100', 'btn');
delElement.textContent = 'DEL';
del.append(delElement);

// % button
const percent = document.createElement('div');
const percentElement = document.createElement('button');
percent.classList.add('col-3',);
percentElement.classList.add('card', 'text-center', 'p-3', 'bg-warning', 'text-white', 'w-100', 'btn');
percentElement.textContent = '%';
percent.append(percentElement);

// ÷ button
const divide = document.createElement('div');
const divideElement = document.createElement('button');
divide.classList.add('col-3');
divideElement.classList.add('card', 'text-center', 'p-3', 'bg-warning', 'text-white', 'w-100', 'btn');
divideElement.textContent = '/';
divide.append(divideElement);

// Second Row
const secondRow = document.createElement('div');
secondRow.classList.add('row', 'g-3', 'my-1', 'fw-bolder', 'bottom_font_size');

// 7 button
const seven = document.createElement('div');
const sevenElement = document.createElement('button');
seven.classList.add('col-3');
sevenElement.classList.add('card', 'text-center', 'p-3', 'bg-light', 'text-black', 'w-100', 'btn');
sevenElement.textContent = '7';
seven.append(sevenElement);

// 8 button
const eight = document.createElement('div');
const eightElement = document.createElement('button');
eight.classList.add('col-3');
eightElement.classList.add('card', 'text-center', 'p-3', 'bg-light', 'text-black', 'w-100', 'btn');
eightElement.textContent = '8';
eight.append(eightElement);

// 9 button
const nine = document.createElement('div');
const nineElement = document.createElement('button');
nine.classList.add('col-3');
nineElement.classList.add('card', 'text-center', 'p-3', 'bg-light', 'text-black', 'w-100', 'btn');
nineElement.textContent = '9';
nine.append(nineElement);

// multiple
const multiple = document.createElement('div');
const multipleElement = document.createElement('button');
multiple.classList.add('col-3',);
multipleElement.classList.add('card', 'text-center', 'p-3', 'bg-warning', 'text-white', 'w-100', 'btn');
multipleElement.textContent = 'x';
multiple.append(multipleElement);

// Third Row
const thirdRow = document.createElement('div');
thirdRow.classList.add('row', 'g-3', 'my-1', 'fw-bolder');

// 4 button
const four = document.createElement('div');
const fourElement = document.createElement('button');
four.classList.add('col-3');
fourElement.classList.add('card', 'text-center', 'p-3', 'bg-light', 'text-black', 'w-100', 'btn');
fourElement.textContent = '4';
four.append(fourElement);

// 5 button
const five = document.createElement('div');
const fiveElement = document.createElement('button');
five.classList.add('col-3');
fiveElement.classList.add('card', 'text-center', 'p-3', 'bg-light', 'text-black', 'w-100', 'btn');
fiveElement.textContent = '5';
five.append(fiveElement);

// 6 button
const six = document.createElement('div');
const sixElement = document.createElement('button');
six.classList.add('col-3');
sixElement.classList.add('card', 'text-center', 'p-3', 'bg-light', 'text-black', 'w-100', 'btn');
sixElement.textContent = '6';
six.append(sixElement);

// minus button
const minus = document.createElement('div');
const minusElement = document.createElement('button');
minus.classList.add('col-3');
minusElement.classList.add('card', 'text-center', 'p-3', 'bg-warning', 'text-white', 'w-100', 'btn');
minusElement.textContent = '-';
minus.append(minusElement);

// Fourth Row
const fourthRow = document.createElement('div');
fourthRow.classList.add('row', 'g-3', 'my-1', 'fw-bolder', 'bottom_font_size');

// 1 button
const one = document.createElement('div');
const oneElement = document.createElement('button');
one.classList.add('col-3');
oneElement.classList.add('card', 'text-center', 'p-3', 'bg-light', 'text-black', 'w-100', 'btn');
oneElement.textContent = '1';
one.append(oneElement);

// 2 button
const two = document.createElement('div');
const twoElement = document.createElement('button');
two.classList.add('col-3');
twoElement.classList.add('card', 'text-center', 'p-3', 'bg-light', 'text-black', 'w-100', 'btn');
twoElement.textContent = '2';
two.append(twoElement);

// 3 button
const three = document.createElement('div');
const threeElement = document.createElement('button');
three.classList.add('col-3');
threeElement.classList.add('card', 'text-center', 'p-3', 'bg-light', 'text-black', 'w-100', 'btn');
threeElement.textContent = '3';
three.append(threeElement);

// plus button
const plus = document.createElement('div');
const plusElement = document.createElement('button');
plus.classList.add('col-3');
plusElement.classList.add('card', 'text-center', 'p-3', 'bg-warning', 'text-white', 'w-100', 'btn');
plusElement.textContent = '+';
plus.append(plusElement);

// Fifth Row
const fifthRow = document.createElement('div');
fifthRow.classList.add('row', 'g-3', 'my-1', 'fw-bolder', 'bottom_font_size');

// 0 button
const zero = document.createElement('div');
const zeroElement = document.createElement('button');
zero.classList.add('col-6'); // 2 ta joy egallaydi
zeroElement.classList.add('card', 'text-center', 'p-3', 'bg-light', 'text-black', 'w-100', 'btn');
zeroElement.textContent = '0';
zero.append(zeroElement);

// dot button
const dot = document.createElement('div');
const dotElement = document.createElement('button');
dot.classList.add('col-3');
dotElement.classList.add('card', 'text-center', 'p-3', 'bg-light', 'text-black', 'w-100', 'btn');
dotElement.textContent = '.';
dot.append(dotElement);

// equal button
const equal = document.createElement('div');
const equalElement = document.createElement('button');
equal.classList.add('col-3');
equalElement.classList.add('card', 'text-center', 'p-3', 'bg-warning', 'text-white', 'w-100', 'btn');
equalElement.textContent = '=';
equal.append(equalElement);

// Row pusher
firstRow.append(clean, del, percent, divide);
secondRow.append(seven, eight, nine, multiple);
thirdRow.append(four, five, six, minus);
fourthRow.append(one, two, three, plus);
fifthRow.append(zero, dot, equal);

// container pusher
practice3Container.append(calcScreen, firstRow, secondRow, thirdRow, fourthRow, fifthRow);


// body pusher
document.body.append(practice3Container);

// functions
const buttons = document.querySelectorAll("button");
const operators = ["+", "-", "/", "x", "%"];

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;
        const lastChar = display.value.slice(-1);

        if (value === "C") {
            display.value = "0";
        }

        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);

            if (display.value === "") {
                display.value = "0";
            }
        } else if (value === "=") {
            display.value = eval(display.value.replace(/x/g, "*")); // eval va replaceni ham suniy intellektdan oldim
        } else {
            // operator ketma-ket kelmasligi (Suniy intellektdan oldim)
            if (operators.includes(value) && operators.includes(lastChar)) {
                return;
            }
            if (display.value === "0") {
                display.value = value;
            } else {
                display.value += value;
            }
        }
    });
});


// Practice 4

// Main container
const practiseContainer4 = document.createElement("div");
practiseContainer4.classList.add("bg-dark", "rounded-4", "mx-auto", "my-5", "d-flex", "flex-column", "align-items-center", "gap-3", "p-4");

practiseContainer4.style.width = "200px";
practiseContainer4.style.height = "400px";

// First circle
const circle1 = document.createElement("div");
circle1.classList.add("bg-secondary", "rounded-circle");
circle1.style.width = "120px";
circle1.style.height = "120px";

// second circle
const circle2 = document.createElement("div");
circle2.classList.add("bg-secondary", "rounded-circle");
circle2.style.width = "120px";
circle2.style.height = "120px";

// thrid circle
const circle3 = document.createElement("div");
circle3.classList.add("bg-secondary", "rounded-circle");
circle3.style.width = "120px";
circle3.style.height = "120px";

// container push
practiseContainer4.append(circle1, circle2, circle3);

// dom push
document.body.append(practiseContainer4);

// Svetafor (traffic light) — each color has its own active duration:
//   Red    → 5 seconds (agility Ai)
//   Yellow → 2 seconds (agility Ai)
//   Green  → 3 seconds (agility Ai)

// Durations in milliseconds for each step [red, yellow, green]
const lightDurations = [5000, 2000, 3000];

let lightIndex = 0;

function runTrafficLight() {

    // Turn off all lights first
    circle1.classList.remove("bg-danger");
    circle2.classList.remove("bg-warning");
    circle3.classList.remove("bg-success");

    // Turn on the current light
    if (lightIndex === 0) {
        circle1.classList.add("bg-danger");   // Red — 5 s
    } else if (lightIndex === 1) {
        circle2.classList.add("bg-warning");  // Yellow — 2 s
    } else if (lightIndex === 2) {
        circle3.classList.add("bg-success");  // Green — 3 s
    }

    const currentDuration = lightDurations[lightIndex];
    lightIndex = (lightIndex + 1) % 3;

    setTimeout(runTrafficLight, currentDuration);
}

// Kick off the sequence
runTrafficLight();