const tasks = [
  {
    title: "Study JavaScript",
    description: "Learn DOM basics",
    status: "pending"
  },
  {
    title: "Workout",
    description: "Go to the gym",
    status: "done"
  }
];

const taskList = document.getElementById("taskList");

function renderTasks() {  
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <div class="task-header">
      <h4>${task.title}</h4> 
      <h6>${task.status}</h6>
    </div>
    <p>${task.description}</p>
      <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>`;
    taskList.appendChild(li);
  });
}
renderTasks();



function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
} 


const modal = document.getElementById('modal');
const addTask = document.querySelector('.add-btn');

addTask.addEventListener('click', () => {
  modal.classList.remove('hidden');
});
console.log(modal);

saveTask().addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const status = document.getElementById('selectStatus').value; 
  tasks.push({ title, description, status });
  renderTasks();
  modal.classList.add('hidden');

}
);

