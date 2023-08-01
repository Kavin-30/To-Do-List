function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="toggleCompleted(this)">Done</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = '';
}

function deleteTask(button) {
    const listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}

function toggleCompleted(button) {
    const listItem = button.parentNode;
    listItem.classList.toggle('completed');
}
