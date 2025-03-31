const taskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-task");
const clearButton = document.getElementById("clear-tasks");
const taskList = document.getElementById("task-list");
const themeToggle = document.getElementById("theme-toggle");

let tasks = [];

window.addEventListener("DOMContentLoaded", () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = storedTasks;
  tasks.forEach(createTaskElement);
});

addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskObject = {
      text: taskText,
      completed: false
    };

    tasks.push(taskObject);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    createTaskElement(taskObject);
    taskInput.value = "";
    taskInput.classList.remove("input-error");
  } else {
    taskInput.classList.add("input-error");
    setTimeout(() => {
      taskInput.classList.remove("input-error");
    }, 600);
  }
});

clearButton.addEventListener("click", () => {
  tasks = [];
  localStorage.removeItem("tasks");
  taskList.innerHTML = "";
});

function createTaskElement(taskObject) {
  const taskItem = document.createElement("li");
  taskItem.textContent = taskObject.text;
  if (taskObject.completed) {
    taskItem.classList.add("completed");
  }

  taskItem.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
    taskObject.completed = !taskObject.completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-btn");

  deleteButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const index = tasks.indexOf(taskObject);
    if (index > -1) {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    taskItem.classList.add("remove");
    setTimeout(() => {
      taskItem.remove();
    }, 300);
  });

  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
