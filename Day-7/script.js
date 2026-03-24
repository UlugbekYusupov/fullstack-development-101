let tasks = [];


const app = document.getElementById('app');


const container = document.createElement('div');
container.className = 'container';

const h1 = document.createElement('h1');
h1.innerText = 'To-Do List';

const inputRow = document.createElement('div');
inputRow.className = 'input-row';

const input = document.createElement('input');
input.placeholder = 'Add a new task...';

const addBtn = document.createElement('button');
addBtn.innerText = 'Add';

inputRow.appendChild(input);
inputRow.appendChild(addBtn);

const list = document.createElement('ul');

container.appendChild(h1);
container.appendChild(inputRow);
container.appendChild(list);
app.appendChild(container);



function addTask() {
    const text = input.value.trim();
    if (text) {
        tasks.push({ id: Date.now(), text, completed: false });
        input.value = '';
        render();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    render();
}

function toggleTask(id) {
    tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    render();
}

function render() {
    list.innerHTML = '';
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.className = 'text' + (task.completed ? ' completed' : '');
        span.innerText = task.text;
        span.onclick = () => toggleTask(task.id);
        
        const del = document.createElement('button');
        del.className = 'del-btn';
        del.innerHTML = '&times;';
        del.onclick = () => deleteTask(task.id);
        
        li.appendChild(span);
        li.appendChild(del);
        list.appendChild(li);
    });
}

addBtn.onclick = addTask;
input.onkeypress = (e) => { if (e.key === 'Enter') addTask(); };

render();
