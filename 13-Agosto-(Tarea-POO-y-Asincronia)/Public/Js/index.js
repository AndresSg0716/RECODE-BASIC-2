class Task {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.completed = false;
  }

  completeTask() {
    this.completed = !this.completed;
  }

  editTask(newName) {
    this.name = newName;
  }
}

class TaskList {
  constructor() {
    this.tasks = this.loadFromLocalStorage();
  }

  addTask(task, callback) {
    setTimeout(() => {
      this.tasks.push(task);
      this.saveToLocalStorage();
      if (callback) callback();
    }, 2000);
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveToLocalStorage();
  }

  toggleTaskCompletion(id) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.completeTask();
      this.saveToLocalStorage();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  loadFromLocalStorage() {
    const tasks = localStorage.getItem("tasks");
    return tasks
      ? JSON.parse(tasks).map((task) => new Task(task.id, task.name))
      : [];
  }

  async fetchTasks() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data.slice(0, 5).map((task) => new Task(task.id, task.title));
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const taskList = new TaskList();
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const taskListElement = document.getElementById("taskList");

  const fetchedTasks = await taskList.fetchTasks();
  fetchedTasks.forEach((task) => taskList.addTask(task, displayTasks));

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskName = taskInput.value.trim();
    if (taskName !== "") {
      const task = new Task(Date.now(), taskName);
      taskList.addTask(task, displayTasks);
      taskInput.value = "";
    }
  });

  taskListElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("complete-btn")) {
      const taskId = parseInt(event.target.closest(".task-item").dataset.id);
      taskList.toggleTaskCompletion(taskId);
      displayTasks();
    } else if (event.target.classList.contains("delete-btn")) {
      const taskId = parseInt(event.target.closest(".task-item").dataset.id);
      taskList.deleteTask(taskId);
      displayTasks();
    }
  });

  function displayTasks() {
    taskListElement.innerHTML = "";
    taskList.tasks.forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.className = `task-item${task.completed ? " completed" : ""}`;
      taskItem.dataset.id = task.id;

      taskItem.innerHTML = `
                  <span class="task-name">${task.name}</span>
                  <button class="action-btn complete-btn">${
                    task.completed ? "Incompleta" : "Completada"
                  }</button>
                  <button class="action-btn delete-btn">Eliminar</button>
              `;

      taskListElement.appendChild(taskItem);
    });
  }

  displayTasks();
});
