// // The Document Object Model (DOM) is a tree-like representation of an HTML document.
// // Each element , attribute, and text is a node in the DOM tree.
// // ------------------------ACCESSING THE DOM-------------------------------
// // 1) getElementById() - selects an element by ID
// // 2) getElementsByClassName() - Selects elements by class (returns HTML collection)
// // 3) getElementsByTagName() - Selects elements by tag name
// // 4) querySelector() - Selects the first matching element
// // 5) querySelectorAll() - Selects all matching elements 
// const title = document.getElementById("main-title");
// const buttons = document.getElementsByClassName("btn");
// const paragraphs = document.querySelectorAll("p");

// // ------------------------Modifying the DOM---------------------------
// // use innerHTMl and textContext to modify an element's content.
// // innerHTML processes HTML  inside the element.
// // textContent only sets plain text.
// document.getElementById("title").innerHTML = "New Title";
// document.getElementById("description").textContent = "Updated Description";

// // classList.add("class")-Adds a class.
// // classList.remove("class")-Removes a class.
// // classList.toggle("class")-toggles a class on/off.

// // ------------------------Creating&Deleting Elements--------------------
// //use  document.createElement() to create new elements dynamically
// const newPara = document.createElement("p");
// newPara.textContent = "This is a new paragraph!";
// document.body.appendChild(newPara);

// //use removeChild() or remove() to delete elements.
// const item = document.getElementById("item");
// item.parentNode.removeChild(item);

// document.getElementById("item").remove();

// //-----commom event types:-----
// // click-button clicks
// // mouseover-Hovering over an element
// // keydown, keyup-Keyboard events
// // submit-Form submission

// // THE addEventListener() method allows us to attach event handlers.
// // syntax: element.addEventListener(event, function,useCapture);
// document.getElementById("btn").addEventListener("click", function(){
//     alert("Button Clicked!");
// });

// task1
// const title = document.createElement("h2");
// title.textContent = "My Task List";
// title.style.color = "darkblue";
// title.style.margin = "5px 0";
// title.style.display = "flex";
// document.body.appendChild(title);

// const input = document.createElement("input");
// input.placeholder = "type a task here...";
// input.style.padding = "10px";
// document.body.appendChild(input);

// const inputDesc = document.createElement("input");
// inputDesc.placeholder = "type description here...";
// inputDesc.style.padding = "10px";
// inputDesc.style.marginLeft = "10px";
// document.body.appendChild(inputDesc);

// const addBtn = document.createElement("button");
// addBtn.textContent = "Add to List";
// addBtn.style.backgroundColor = "darkgreen";
// addBtn.style.color = "white";
// addBtn.style.marginLeft = "10px";
// document.body.appendChild(addBtn);

// const list = document.createElement("ul");
// document.body.appendChild(list);


// addBtn.addEventListener("click", function() {
//     const taskText = input.value;

//     if (taskText !== "") {
//         const taskText = input.value;
//         const descText = inputDesc.value;
        
        
//         newItem.style.backgroundColor = "#f0f0f0";
//         newItem.style.margin = "5px 0";
//         newItem.style.padding = "10px";
//         newItem.style.listStyle = "none";
//         newItem.style.borderRadius = "5px";
//         newItem.style.display = "flex";
//         newItem.style.justifyContent = "space-between";

//         const deleteBtn = document.createElement("button");
//         deleteBtn.textContent = " X ";
//         deleteBtn.style.border = "none";
//         deleteBtn.style.cursor = "pointer";
//         deleteBtn.style.marginLeft = "10px";
//         deleteBtn.style.color = "darkred";
        
//         deleteBtn.onclick = function() {
//             list.removeChild(newItem);
//         };

//         newItem.appendChild(deleteBtn);
//         list.appendChild(newItem);

//         input.value = "";
//     }
// });




// Grabbing the buttons and the modal
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalOverlay = document.getElementById('modal-overlay');

// Show the modal
openModalBtn.onclick = function() {
    modalOverlay.style.display = 'flex'; 
};

// Hide the modal
closeModalBtn.onclick = function() {
    modalOverlay.style.display = 'none';
};
const saveTaskBtn = document.getElementById('save-task-btn');
const taskList = document.getElementById('task-list'); // This is the container in your HTML
const titleInput = document.getElementById('task-title');
const descInput = document.getElementById('task-desc');
const statusInput = document.getElementById('task-status');

saveTaskBtn.onclick = function() {
    // 1. Create a new div (the card)
    const newTask = document.createElement('div');
    newTask.classList.add('task-card');

    // 2. Build the inside of the card using the values from your inputs
    newTask.innerHTML = `
        <span class="status-tag ${statusInput.value}">${statusInput.value}</span>
        <h3>${titleInput.value}</h3>
        <p>${descInput.value}</p>
        <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
    `;

    // 3. Add the new card to your task list
    taskList.appendChild(newTask);

    // 4. Clear the inputs and hide the pop-up
    titleInput.value = '';
    descInput.value = '';
    modalOverlay.style.display = 'none';
};


