window.onload = loadTasks;

function loadTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const taskItem = createTaskElement(task.text, task.completed);
        taskList.appendChild(taskItem);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText){
        const taskList = document.getElementById('taskList');
        const taskItem = createTaskElement(taskText);
        taskList.appendChild(taskItem);
        saveTask(taskText, false);
        taskInput.value = '';
    }
}

function createTaskElement(text, completed = false) {
    const taskItem = document.createElement('li');
    taskItem.innerText = text;
    if (completed) taskItem.classList.add('completed');

    taskItem.onclick = function() {
        taskItem.classList.toggle('completed');
        toggleTaskCompleted(text);
    };
    return taskItem;
}

function saveTask(text, completed) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({text, completed});
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function toggleTaskCompleted(text) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        if (task.text === text) {
            task.completed = !task.completed;
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function resetTasks(){
    document.getElementById('taskList').innerHTML = '';
    localStorage.removeItem('tasks');
}

function regusterServiceWorker() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js")
            .then(registration => {
                console.log("Service Worker registered with scope:", registration.scope);
            })
            .catch(error => {
                console.error("Service Worker registration failed:", error);
            });
    }    
}

regusterServiceWorker();