const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// create container
const container = document.createElement("div");
container.className = "container";

// title
const title = document.createElement("h1");
title.textContent = "My To-Do List";

// input
const input = document.createElement("input");
input.placeholder = "Write a task...";

// button
const addBtn = document.createElement("button");
addBtn.textContent = "Add";

// list
const list = document.createElement("ul");

// append elements
container.append(title, input, addBtn, list);
root.appendChild(container);
