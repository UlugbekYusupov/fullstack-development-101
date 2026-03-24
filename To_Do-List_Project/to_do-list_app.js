// Root container
const app = document.getElementById('root');

// Retrieve tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Create main card
const card = document.createElement('div');
card.id = 'todo-card';
app.appendChild(card);

// Title
const title = document.createElement('h1');
title.innerText = 'Interactive To-Do List';
card.appendChild(title);

// Tasks container
const tasksContainer = document.createElement('div');
card.appendChild(tasksContainer);

// Add Task Button
const addTaskBtn = document.createElement('button');
addTaskBtn.id = 'add-task-btn';
addTaskBtn.innerText = 'Add Task';
card.appendChild(addTaskBtn);

// Modal Elements
const modalBg = document.createElement('div');
modalBg.className = 'modal-bg';

const modal = document.createElement('div');
modal.className = 'modal';

modal.innerHTML = `
  <h2>Add Task</h2>
  <input type="text" id="task-title" placeholder="Task Title">
  <textarea id="task-desc" placeholder="Task Description"></textarea>
  <select id="task-status">
    <option value="pending">Pending</option>
    <option value="in-progress">In Progress</option>
    <option value="completed">Completed</option>
  </select>
  <div style="text-align:right;">
    <button class="save-btn">Save Task</button>
    <button class="close-btn">Close</button>
  </div>
`;

modalBg.appendChild(modal);
document.body.appendChild(modalBg);

// Functions
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTaskCard(task, index) {
  const card = document.createElement('div');
  card.className = 'task-card';

  const taskTitle = document.createElement('div');
  taskTitle.className = 'title';
  taskTitle.innerText = task.title;

  const taskDesc = document.createElement('div');
  taskDesc.className = 'description';
  taskDesc.innerText = task.description;

  const badge = document.createElement('div');
  badge.className = 'badge ' + task.status;
  badge.innerText = task.status.replace('-', ' ').toUpperCase();

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerText = 'Delete';
  deleteBtn.addEventListener('click', () => {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  });

  card.appendChild(taskTitle);
  card.appendChild(taskDesc);
  card.appendChild(badge);
  card.appendChild(deleteBtn);

  tasksContainer.appendChild(card);
}

function renderTasks() {
  tasksContainer.innerHTML = '';
  tasks.forEach((task, i) => createTaskCard(task, i));
}

// Event Listeners
addTaskBtn.addEventListener('click', () => modalBg.style.display = 'flex');

modal.querySelector('.close-btn').addEventListener('click', () => {
  modalBg.style.display = 'none';
});

modal.querySelector('.save-btn').addEventListener('click', () => {
  const titleInput = document.getElementById('task-title').value.trim();
  const descInput = document.getElementById('task-desc').value.trim();
  const statusInput = document.getElementById('task-status').value;

  if(titleInput === '') {
    alert('Task title is required!');
    return;
  }

  tasks.push({title: titleInput, description: descInput, status: statusInput});
  saveTasks();
  renderTasks();

  // Clear inputs and close modal
  document.getElementById('task-title').value = '';
  document.getElementById('task-desc').value = '';
  document.getElementById('task-status').value = 'pending';
  modalBg.style.display = 'none';
});

// Initial render
renderTasks();
