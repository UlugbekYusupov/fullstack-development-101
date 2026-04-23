//  DOM manipulation

// GetElementbyID()

// const title = document.getElementById('main-heading');
// console.log(title);

// GetElementByClassName()

// const listItem = document.getElementsByClassName('list-items')
// console.log(listItem);

// GetElementsByTagName()

// const listItem = document.getElementsByTagName('li')
// console.log(listItem);

// querySelector()

// const container = document.querySelector('div')
// console.log(container);

// querySelectorAll()
// const container = document.querySelectorAll('div')
// console.log(container);




// const h1 = document.getElementById('id');
// h1.classList.add('test')

// const p = document.getElementsByTagName('p');

// const buttons = document.getElementsByClassName('btn');
// const container = document.querySelectorAll()


// const newPara = document.createElement("p")
// newPara.textContent = "This is new paragraph";
// root.appendChild(newPara);

// const button = document.createElement("btn");
// button.textContent = "Click me";
// root.appendChild(button)

// button.addEventListener("mouseover", function() {
//     console.log("Button is clicked");
// })



// Styling elements

// const title = document.querySelector('#main-heading');

// title.style.color = 'red'

// const listItems = document.querySelectorAll('.list-items');

// for(let i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '2rem';

// }

// console.log(listItems);

// Creating Elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// ul.append(li)

// console.log();


// // PRACTICE 1   TO-DO LIST
// const mainDiv = document.createElement('div');
// mainDiv.classList.add('main-container');
// document.body.appendChild(mainDiv);

// const title = document.createElement('h1');
// title.textContent = "Interactive To-Do List.";
// title.classList.add('app-title');
// mainDiv.appendChild(title);


// function createTaskCard(titletext, descText, statusText) {
//     const card = document.createElement('div');
//     card.classList.add('task-card');

//     const h3 = document.createElement('h3');
//     h3.textContent = titletext; 
//     card.appendChild(h3);

//     const pTag = document.createElement('p');
//     pTag.textContent = descText; 
//     pTag.classList.add('desc');
//     card.appendChild(pTag);

//     const statusTag = document.createElement('p');
//     statusTag.textContent = statusText;
    
   
//     if (statusText.toLowerCase() === "pending") statusTag.classList.add('badge-pending');
//     if (statusText.toLowerCase() === "in progress") statusTag.classList.add('badge-progress');
//     if (statusText.toLowerCase() === "completed") statusTag.classList.add('badge-completed');
    
//     card.appendChild(statusTag);

//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add('delete-btn');
//     card.appendChild(deleteBtn);

//     return card;
// }


// mainDiv.appendChild(createTaskCard("Task 1", "Description 1", "pending"));
// mainDiv.appendChild(createTaskCard("Task 2", "Description 2", "in progress"));
// mainDiv.appendChild(createTaskCard("Task 3", "Description 3", "completed"));

// const button = document.createElement("button");
// button.textContent = "Add Task";
// button.classList.add('add-btn');
// mainDiv.appendChild(button);


// const modalOverlay = document.createElement('div');
// modalOverlay.classList.add('modal-overlay');

// const modalContent = document.createElement('div');
// modalContent.classList.add('model-content'); 

// const titleInput = document.createElement('input');
// titleInput.type = "text";
// titleInput.placeholder = "Task Title"; 
// titleInput.classList.add("modal-input");

// const descInput = document.createElement('textarea');
// descInput.placeholder = "Task Description";
// descInput.classList.add('modal-input');

// const statusSelect = document.createElement('select');
// statusSelect.classList.add('modal-input');

// ["Pending", "In Progress", "Completed"].forEach(text => {
//     const opt = document.createElement('option');
//     opt.value = text.toLowerCase();
//     opt.textContent = text;
//     statusSelect.appendChild(opt);
// });

// const saveBtn = document.createElement('button');
// saveBtn.textContent = "Save Task";
// saveBtn.classList.add('add-btn');

// const closeBtn = document.createElement('button');
// closeBtn.textContent = "Close";
// closeBtn.classList.add('close-btn');


// modalContent.appendChild(titleInput);
// modalContent.appendChild(descInput);
// modalContent.appendChild(statusSelect);
// modalContent.appendChild(saveBtn);
// modalContent.appendChild(closeBtn);
// modalOverlay.appendChild(modalContent);
// document.body.appendChild(modalOverlay);


// modalOverlay.style.display = 'none';

// button.addEventListener('click', () => {
//     modalOverlay.style.display = 'flex';
// });

// closeBtn.addEventListener('click', () => {
//     modalOverlay.style.display = 'none';
// });


// saveBtn.addEventListener('click', () => {
    
//     const newTitle = titleInput.value;
//     const newDesc = descInput.value;
//     const newStatus = statusSelect.options[statusSelect.selectedIndex].text;

    
//     if (newTitle.trim() === "") {
//         alert("Please enter a task title!");
//         return;
//     }

    
//     const newCard = createTaskCard(newTitle, newDesc, newStatus.toLowerCase());

//     mainDiv.insertBefore(newCard, button);

    
//     titleInput.value = "";
//     descInput.value = "";
//     statusSelect.selectedIndex = 0;

//     modalOverlay.style.display = 'none';
// });


// PRACTICE 2 PASSWORD CHECKER



// const container = document.createElement('div');
// container.classList.add('pass-card');
// document.body.appendChild(container);

// const title = document.createElement('h2');
// title.textContent = "Password strength Checker";
// title.classList.add('h2');
// container.appendChild(title);

// const input = document.createElement('input');
// input.type = "password";
// input.placeholder = "Enter password";
// input.classList.add('pass-input');
// container.appendChild(input);


// const badge = document.createElement('div');
// badge.classList.add('strength-badge');
// container.appendChild(badge);


// function checkPassword(password) {
//     if (password.length ===0) return "";

//     let score = 0;
//     if (password.length >= 8) score++;
//     if (/[A-Z]/.test(password)) score++;
//     if (/[0-9]/.test(password)) score++;
//     if (/[^A-Za-z0-9]/.test(password)) score++;

//     if (score >= 4) return "Strong";
//     if (score >= 2) return "Medium";
//     return "Weak";
// }

// input.addEventListener('input', () => {
//     const currentPassword = input.value;
//     const result = checkPassword(currentPassword);
//     badge.textContent = result;
    
//     if (result === "Strong") {
//         badge.style.backgroundColor = "#2e7d32"
//     }
//     else if (result === "Medium") {
//         badge.style.backgroundColor = "#f6ad55"
//     }
//     else if (result === "Weak") {
//         badge.style.backgroundColor = "#e53e3e";
//     } else {
//         badge.style.backgroundColor = "transparent"; 
//     }
// });

// PRACTICE 3 CALCULATOR

// const calcContainer = document.createElement('div');
// calcContainer.classList.add('calculator');
// document.body.appendChild(calcContainer);


// const display = document.createElement('input');
// display.type = 'text';
// display.classList.add('display');
// display.placeholder = "0";
// display.readOnly = true; 
// calcContainer.appendChild(display);


// const buttonsDiv = document.createElement('div');
// buttonsDiv.classList.add('buttons-grid');
// calcContainer.appendChild(buttonsDiv);


// const labels = [
//     'C', 'DEL', '%', '/',
//     '7', '8', '9', '*',
//     '4', '5', '6', '-',
//     '1', '2', '3', '+',
//     '0', '.', '='
// ];


// labels.forEach(label => {
//     const btn = document.createElement('button');
//     btn.textContent = label;
//     btn.classList.add('btn');
    

//     if (['C', 'DEL', '%', '/', '*', '-', '+'].includes(label)) {
//         btn.classList.add('btn-orange');
//     } else if (label === '=') {
//         btn.classList.add('btn-green');
//     }

//     btn.addEventListener('click', () => {
//         if (label === 'C') {
//             display.value = ''; 
//         } 
//         else if (label === 'DEL') {
//             display.value = display.value.slice(0, -1); 
//         } 
//         else if (label === '=') {
//             try {
                
//                 display.value = eval(display.value); 
//             } catch {
//                 display.value = "Error"; 
//             }
//         } 
//         else {
//             display.value += label;
//         }
//     });
    
//     buttonsDiv.appendChild(btn);


// });


// PRACTICE 4 TRAFFIC LIGHT

// const trafficContainer = document.createElement('div');
// trafficContainer.classList.add('traffic-light');
// document.body.appendChild(trafficContainer);

// const redLight = document.createElement('div');
// redLight.classList.add('light', 'red');

// const yellowLight = document.createElement('div');
// yellowLight.classList.add('light', 'yellow');

// const greenLight = document.createElement('div');
// greenLight.classList.add('light', 'green');

// trafficContainer.appendChild(redLight);
// trafficContainer.appendChild(yellowLight);
// trafficContainer.appendChild(greenLight);


// function startTrafficLight() {
    
//     function resetLights() {
//         redLight.classList.remove('active');
//         yellowLight.classList.remove('active');
//         greenLight.classList.remove('active');
//     }

//     function showRed() {
//         resetLights();
//         redLight.classList.add('active');
//         setTimeout(showYellowToGreen, 2000); 
//     }

//     function showYellowToGreen() {
//         resetLights();
//         yellowLight.classList.add('active');
//         setTimeout(showGreen, 2000);
//     }

//     function showGreen() {
//         resetLights();
//         greenLight.classList.add('active');
//         setTimeout(showYellowToRed, 5000); 
//     }

//     function showYellowToRed() {
//         resetLights();
//         yellowLight.classList.add('active');
//         setTimeout(showRed, 2000);
//     }

//     showRed();
// }

// startTrafficLight();





// const button = document.querySelector("button")
// const div = document.getElementById("container")

// button.addEventListener("click", function(){
//     console.log("button is clicked");
// }, true)



// const mainDiv = document.createElement('div');
// mainDiv.style.padding = "50px";
// mainDiv.style.backgroundColor = "lightgray";
// document.body.appendChild(mainDiv);

// const button = document.createElement('button');
// button.textContent = "Click Me";
// mainDiv.appendChild(button);

// // Listener on the Parent
// mainDiv.addEventListener('click', () => {
//     alert("Parent Div Clicked!");
// });

// // Listener on the Child (Button)
// button.addEventListener('click', () => {
//     alert("Button Clicked!");
// });

// button.addEventListener('click', (event) => { // Notice the 'event' parameter
//     event.stopPropagation(); // "Stop! Don't tell my parents!"
//     alert("Button Clicked!");
// });



// Event Propagation

// const grandparent = document.getElementById("grandparent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");


// parent.addEventListener("click", function (event) {
//     console.log("Parent is clicked");
// });

// child.addEventListener("click", function () {
//     console.log("Child is clicked");
// });


// HOMEWORK 1

const textSwitcherBtn = document.getElementById("text-switcher-btn");
const heading = document.querySelector("h2");
const loginBtn = getElementById("loginBtn");

const usernameInput = document.getElementById("username")
const emailInput = document.getElementById("username-label")














