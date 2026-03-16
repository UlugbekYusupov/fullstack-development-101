const addTaskBtn = document.getElementById("addTaskBtn");
const modalOverlay = document.getElementById("modalOverlay");
const closeBtn = document.getElementById("closeBtn");
const saveTaskBtn = document.getElementById("saveTaskBtn");

const newTaskTitle = document.getElementById("newTaskTitle");
const newTaskDesc = document.getElementById("newTaskDesc");
const newTaskStatus = document.getElementById("newTaskStatus");

const tasks = document.getElementById("tasks");

addTaskBtn.addEventListener("click", function () {
    modalOverlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
    modalOverlay.classList.add("hidden");
});

saveTaskBtn.addEventListener("click", function () {
    const titleValue = newTaskTitle.value.trim();
    const descValue = newTaskDesc.value.trim();
    const statusValue = newTaskStatus.value;

    if (titleValue === "" || descValue === "") {
        alert("Please fill all fields");
        return;
    }

    const taskCard = document.createElement("div");
    taskCard.classList.add("tasks_item");

    taskCard.innerHTML = `
        <h3 class="task_title">${titleValue}</h3>
        <p class="taskDes">${descValue}</p>
        <div class="taskStatus ${statusValue}">${statusValue}</div>
        <button class="DeleteBtn">Delete</button>
    `;

    tasks.appendChild(taskCard);

    newTaskTitle.value = "";
    newTaskDesc.value = "";
    newTaskStatus.value = "pending";

    modalOverlay.classList.add("hidden");
});

tasks.addEventListener("click", function (e) {
    if (e.target.classList.contains("DeleteBtn")) {
        e.target.closest(".tasks_item").remove();
    }
});