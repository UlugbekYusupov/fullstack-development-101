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


// PRACTICE 1
const mainDiv = document.createElement('div');
mainDiv.classList.add('main-container');
document.body.appendChild(mainDiv);

const title = document.createElement('h1');
title.textContent = "Interactive To-Do List.";
title.classList.add('app-title');
mainDiv.appendChild(title);


function createTaskCard(titletext, descText, statusText) {
    const card = document.createElement('div');
    card.classList.add('task-card');

    const h3 = document.createElement('h3');
    h3.textContent = titletext; 
    card.appendChild(h3);

    const pTag = document.createElement('p');
    pTag.textContent = descText; 
    pTag.classList.add('desc');
    card.appendChild(pTag);

    const statusTag = document.createElement('p');
    statusTag.textContent = statusText;
    
    // Check status to add correct color class
    if (statusText.toLowerCase() === "pending") statusTag.classList.add('badge-pending');
    if (statusText.toLowerCase() === "in progress") statusTag.classList.add('badge-progress');
    if (statusText.toLowerCase() === "completed") statusTag.classList.add('badge-completed');
    
    card.appendChild(statusTag);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');
    card.appendChild(deleteBtn);

    return card;
}

// Initial Tasks
mainDiv.appendChild(createTaskCard("Task 1", "Description 1", "pending"));
mainDiv.appendChild(createTaskCard("Task 2", "Description 2", "in progress"));
mainDiv.appendChild(createTaskCard("Task 3", "Description 3", "completed"));

const button = document.createElement("button");
button.textContent = "Add Task";
button.classList.add('add-btn');
mainDiv.appendChild(button);

// --- Modal Construction ---
const modalOverlay = document.createElement('div');
modalOverlay.classList.add('modal-overlay');

const modalContent = document.createElement('div');
modalContent.classList.add('model-content'); 

const titleInput = document.createElement('input');
titleInput.type = "text";
titleInput.placeholder = "Task Title"; 
titleInput.classList.add("modal-input");

const descInput = document.createElement('textarea');
descInput.placeholder = "Task Description";
descInput.classList.add('modal-input');

const statusSelect = document.createElement('select');
statusSelect.classList.add('modal-input');

["Pending", "In Progress", "Completed"].forEach(text => {
    const opt = document.createElement('option');
    opt.value = text.toLowerCase();
    opt.textContent = text;
    statusSelect.appendChild(opt);
});

const saveBtn = document.createElement('button');
saveBtn.textContent = "Save Task";
saveBtn.classList.add('add-btn');

const closeBtn = document.createElement('button');
closeBtn.textContent = "Close";
closeBtn.classList.add('close-btn');


modalContent.appendChild(titleInput);
modalContent.appendChild(descInput);
modalContent.appendChild(statusSelect);
modalContent.appendChild(saveBtn);
modalContent.appendChild(closeBtn);
modalOverlay.appendChild(modalContent);
document.body.appendChild(modalOverlay);


modalOverlay.style.display = 'none';

button.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});


saveBtn.addEventListener('click', () => {
    
    const newTitle = titleInput.value;
    const newDesc = descInput.value;
    const newStatus = statusSelect.options[statusSelect.selectedIndex].text;

    
    if (newTitle.trim() === "") {
        alert("Please enter a task title!");
        return;
    }

    
    const newCard = createTaskCard(newTitle, newDesc, newStatus.toLowerCase());

    mainDiv.insertBefore(newCard, button);

    
    titleInput.value = "";
    descInput.value = "";
    statusSelect.selectedIndex = 0;

    modalOverlay.style.display = 'none';
});















