
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('#clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
console.log(clearBtn);
// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  //DOM LOAD EVENTS
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // REMOVE TASK EVENT
  taskList.addEventListener('click', removeTask);
  // CLEAR TASK EVENT
  clearBtn.addEventListener('click', clearTasks);
  //  FILTER TASK EVENT
  filter.addEventListener('keyup', filterTasks);
}
//GET TASKS FROM LS
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul

    taskList.appendChild(li);
   
  });
}

// Add Task
function addTask(e) {
  if (taskInput.value ==
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('#clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
console.log(clearBtn);
// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  //DOM LOAD EVENTS
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // REMOVE TASK EVENT
  taskList.addEventListener('click', removeTask);
  // CLEAR TASK EVENT
  clearBtn.addEventListener('click', clearTasks);
  //  FILTER TASK EVENT
  filter.addEventListener('keyup', filterTasks);
}
//GET TASKS FROM LS
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul

    taskList.appendChild(li);
   
  });
}

// Add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // STORE IN LOCAL STORAGE
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}
//STORE TASK
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// REMOVE TASK
function removeTask(e) {
  if (e.target.parentElement.classlist.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.remove();

      //Removefrom localStorage 
      removeTaskFromLocalStorage
        (e.target.parentElement.parentElement);
    }
  }
}
//remove from ls
function removeTaskfromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON, parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    if (taskItem.textContent === task) {
      task.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clear task
function clearTasks() {
  //taskList.innerHTML = "";

  // Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  // https://jsperf.com/innerhtml-vs-removechild

  //clear tasks from LS
  clearTasksFromLocalStorage();
  
};

function clearTasksFromLocalStorage()  {
localStorage.clear();
}

'tasks'));
  }

 