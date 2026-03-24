let tasks = [
  { id: 1, title: 'Task 1', description: 'Description for Task 1', status: 'pending'     },
  { id: 2, title: 'Task 2', description: 'Description for Task 2', status: 'in-progress' },
  { id: 3, title: 'Task 3', description: 'Description for Task 3', status: 'completed'   },
];

let nextId = 4;

function makeEl(tag, props = {}) {
  const el = document.createElement(tag);

  for (const key in props) {
    if (key === 'style') {
      for (const cssProp in props.style) {
        el.style[cssProp] = props.style[cssProp];
      }
    } else {
      el[key] = props[key];
    }
  }

  return el;
}




// Outer wrapper (the white card in the center of the screen) 
const pageWrapper = makeEl('div', {
  style: {
    maxWidth    : '540px',
    margin      : '48px auto',
    background  : '#ffffff',
    borderRadius: '12px',
    padding     : '32px 28px',
    boxShadow   : '0 4px 24px rgba(0,0,0,0.10)',
  }
});

// Title
const title = makeEl('h2', {
  textContent: 'Interactive To-Do List',
  style: {
    textAlign   : 'center',
    marginBottom: '24px',
    fontWeight  : '700',
    fontSize    : '22px',
    color       : '#1a1a2e',
  }
});

// Task list (an unordered list — each <li> will be one task card) 
const taskList = makeEl('ul', {
  style: {
    listStyle: 'none',   // remove bullet points
    padding  : '0',
  }
});

// "Add Task" button at the bottom 
const addTaskBtn = makeEl('button', {
  textContent: 'Add Task',
  style: {
    width        : '100%',
    marginTop    : '20px',
    padding      : '13px',
    background   : '#1565c0',
    color        : '#fff',
    border       : 'none',
    borderRadius : '8px',
    fontSize     : '15px',
    fontWeight   : '600',
    cursor       : 'pointer',
    letterSpacing: '0.3px',
  }
});

// Assemble the card 
pageWrapper.appendChild(title);
pageWrapper.appendChild(taskList);
pageWrapper.appendChild(addTaskBtn);

// Put the card on the actual pag
document.body.appendChild(pageWrapper);

function renderTasks() {
  
  taskList.innerHTML = '';

  tasks.forEach(function(task) {

    // Card container (<li>)
    const card = makeEl('li', {
      style: {
        background   : '#f8f9fb',
        border       : '1px solid #e8eaf0',
        borderRadius : '8px',
        padding      : '14px 16px',
        marginBottom : '12px',
      }
    });

    //  Top row: title on the left, status badge on the right 
    const topRow = makeEl('div', {
      style: {
        display        : 'flex',
        justifyContent : 'space-between',
        alignItems     : 'center',
        marginBottom   : '4px',
      }
    });

    const taskTitle = makeEl('span', {
      textContent: task.title,
      style: {
        fontWeight: '700',
        fontSize  : '15px',
        color     : '#1a1a2e',
      }
    });

    // Status badge 
    const badge = makeEl('span', {
      textContent: task.status.replace('-', ' '), 
      className  : 'badge-' + task.status,        
      style: {
        padding      : '3px 12px',
        borderRadius : '20px',
        fontSize     : '12px',
        fontWeight   : '600',
        textTransform: 'capitalize',
      }
    });

    topRow.appendChild(taskTitle);
    topRow.appendChild(badge);

    // Description text
    const desc = makeEl('p', {
      textContent: task.description,
      style: {
        fontSize    : '13px',
        color       : '#555',
        marginBottom: '10px',
        lineHeight  : '1.5',
      }
    });

    // Delete button 
    const deleteBtn = makeEl('button', {
      textContent: 'Delete',
      dataset: { id: task.id },
      style: {
        background   : '#e53935',
        color        : '#fff',
        border       : 'none',
        borderRadius : '6px',
        padding      : '5px 14px',
        cursor       : 'pointer',
        fontSize     : '13px',
        fontWeight   : '600',
      }
    });
    deleteBtn.dataset.id = task.id;

    // Attach the delete listener 
    deleteBtn.addEventListener('click', function() {
      deleteTask(task.id);
    });

    // Assemble the card
    card.appendChild(topRow);
    card.appendChild(desc);
    card.appendChild(deleteBtn);

    // Put the card in the list
    taskList.appendChild(card);
  });
}

// Overlay (the dark backdrop behind the popup) 
const overlay = makeEl('div', {
  style: {
    display        : 'none',       
    position       : 'fixed', 
    inset          : '0',          
    background     : 'rgba(0,0,0,0.45)',
    justifyContent : 'center',
    alignItems     : 'center',
    zIndex         : '1000',
  }
});

// White popup box
const modalBox = makeEl('div', {
  style: {
    background   : '#fff',
    borderRadius : '10px',
    padding      : '28px 24px',
    width        : '360px',
    maxWidth     : '90vw',
    boxShadow    : '0 8px 32px rgba(0,0,0,0.18)',
  }
});

// Modal title
const modalTitle = makeEl('h3', {
  textContent: 'Add Task',
  style: {
    textAlign   : 'center',
    marginBottom: '18px',
    fontWeight  : '700',
    fontSize    : '18px',
    color       : '#1a1a2e',
  }
});

// Helper: builds a full-width form field with consistent styling 
function makeField(tag, props) {
  const el = makeEl(tag, props);
  el.style.width        = '100%';
  el.style.padding      = '9px 12px';
  el.style.marginBottom = '12px';
  el.style.border       = '1px solid #ccc';
  el.style.borderRadius = '6px';
  el.style.fontSize     = '14px';
  el.style.outline      = 'none';
  el.style.boxSizing    = 'border-box';
  return el;
}

// Task Title input
const titleInput = makeField('input', {
  type       : 'text',
  placeholder: 'Task Title',
});

// Task Description textarea 
const descInput = makeField('textarea', {
  placeholder: 'Task Description',
  rows       : 3,
  style      : { resize: 'vertical' },
});

// Status dropdown
const statusSelect = makeField('select', {});

// Build the three <option> elements and add them to the <select>
const statusOptions = [
  { value: 'pending',     label: 'Pending'     },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'completed',   label: 'Completed'   },
];

statusOptions.forEach(function(opt) {
  const option = makeEl('option', {
    value      : opt.value,
    textContent: opt.label,
  });
  statusSelect.appendChild(option);
});

// Save Task button
const saveBtn = makeEl('button', {
  textContent: 'Save Task',
  style: {
    width        : '100%',
    padding      : '11px',
    background   : '#1565c0',
    color        : '#fff',
    border       : 'none',
    borderRadius : '7px',
    fontSize     : '14px',
    fontWeight   : '600',
    cursor       : 'pointer',
    marginBottom : '8px',
  }
});

// Close button
const closeBtn = makeEl('button', {
  textContent: 'Close',
  style: {
    width       : '100%',
    padding     : '11px',
    background  : '#e53935',
    color       : '#fff',
    border      : 'none',
    borderRadius: '7px',
    fontSize    : '14px',
    fontWeight  : '600',
    cursor      : 'pointer',
  }
});

// Assemble the modal box 
modalBox.appendChild(modalTitle);
modalBox.appendChild(titleInput);
modalBox.appendChild(descInput);
modalBox.appendChild(statusSelect);
modalBox.appendChild(saveBtn);
modalBox.appendChild(closeBtn);

// Put modalBox inside overlay, overlay on the page
overlay.appendChild(modalBox);
document.body.appendChild(overlay);

// openModal() / closeModal() — show and hide the popup
function openModal() {
  // Clear old values from previous use
  titleInput.value    = '';
  descInput.value     = '';
  statusSelect.value  = 'pending';
  // Add the CSS class that sets display: flex
  overlay.classList.add('overlay-visible');
}

function closeModal() {
  // Remove that class → display goes back to none
  overlay.classList.remove('overlay-visible');
}


addTaskBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

saveBtn.addEventListener('click', function() {

  const titleValue  = titleInput.value.trim();   // .trim() removes extra spaces
  const descValue   = descInput.value.trim();
  const statusValue = statusSelect.value;

  if (titleValue === '') {
    // Change border to red so user sees the problem
    titleInput.style.border = '2px solid red';
    titleInput.focus();        
    return;                    
  }

  // Reset border if it was red before
  titleInput.style.border = '1px solid #ccc';

  // Build a new task object
  const newTask = {
    id         : nextId++,      
    title      : titleValue,
    description: descValue || 'No description.',
    status     : statusValue,
  };

  tasks.push(newTask);

  renderTasks();

  closeModal();
});


overlay.addEventListener('click', function(event) {
  if (event.target === overlay) {
    closeModal();
  }
});

function deleteTask(id) {
  tasks = tasks.filter(function(task) {
    return task.id !== id;
  });

  renderTasks();   // Re-draw the list with the updated data
}

renderTasks();   // This one line starts the whole app.