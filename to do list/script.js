document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(deleteBtn);
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
}