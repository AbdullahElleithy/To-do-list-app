class Task {

    constructor(name, done = false, dateAdded = new Date().toLocaleString(), id = Date.now()) {
        this.name = name;
        this.done = done;
        this.dateAdded = dateAdded;
        this.id = id;
    }

    changeName(newName) {
        this.name = newName;
    }

    switchStatus() {
        this.done = !this.done;
    }
}

let tasks = [];
loadTasks();
renderTasks();
document.querySelector(".add-btn").onclick = addTask;

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {

    let data = JSON.parse(localStorage.getItem("tasks"));

    if (data) {
        tasks = data.map(task => new Task(
            task.name,
            task.done,
            task.dateAdded,
            task.id
        ));
    }

}

function addTask() {

    let taskName = prompt("Enter Task Name");

    if (taskName === null)
        return;

    taskName = taskName.trim();

    if (taskName === "") {
        alert("Task name can't be empty.");
        return;
    }

    tasks.push(new Task(taskName));
    saveTasks();
    renderTasks();

}

function deleteTask(id) {

    let confirmDelete = confirm("Are you sure you want to delete this task?");

    if (!confirmDelete)
        return;

    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();

}

function editTask(id) {

    let task = tasks.find(task => task.id === id);
    let newName = prompt("Edit Task", task.name);

    if (newName === null)
        return;

    newName = newName.trim();

    if (newName === "") {
        alert("Task name can't be empty.");
        return;
    }

    task.changeName(newName);
    saveTasks();
    renderTasks();

}

function switchTask(id) {
    let task = tasks.find(task => task.id === id);
    task.switchStatus();
    saveTasks();
    renderTasks();
}

function renderTasks() {
    let container = document.getElementById("tasks");
    container.innerHTML = "";
    tasks.forEach(task => {

        container.innerHTML += `
        <div class="task ${task.done ? "completed" : ""}">
            <div class="task-info">
                <div class="task-name ${task.done ? "done" : ""}">
                    ${task.name}
                </div>
                <div class="task-date">
                    Added: ${task.dateAdded}
                </div>
            </div>
            <div class="actions">
                <div
                    class="icon delete"
                    onclick="deleteTask(${task.id})"
                >
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </div>
                <div
                    class="icon edit"
                    onclick="editTask(${task.id})"
                >
                    <span class="material-symbols-outlined">
                        edit
                    </span>
                </div>
                <div
                    class="icon status"
                    onclick="switchTask(${task.id})"
                >
                    <span class="material-symbols-outlined">
                        ${task.done ? "close" : "check"}
                    </span>
                </div>
            </div>
        </div>
        `;
    }
  );

}