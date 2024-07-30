let tasks = [];

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        tasks.push(taskText);
        taskInput.value = '';
        renderTasks();
    }
}

function editTask(index) {
    const taskItem = document.getElementById(`task-${index}`);
    const taskText = tasks[index];
    
    taskItem.innerHTML = `
        <input type="text" id="edit-task-${index}" class="edit-task" value="${taskText}">
        <button onclick="saveTask(${index})">Save</button>
    `;
}

function saveTask(index) {
    const editInput = document.getElementById(`edit-task-${index}`);
    const updatedText = editInput.value.trim();
    
    if (updatedText) {
        tasks[index] = updatedText;
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.id = `task-${index}`;
        taskItem.innerHTML = `
            <span class="task">${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

document.getElementById('new-task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
