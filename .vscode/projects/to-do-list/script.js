const taskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

let tasks = [];

window.addEventListener("DOMContentLoaded", () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = storedTasks;

  tasks.forEach(taskObject => {
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

    taskList.appendChild(taskItem);
  });
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

    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    taskInput.value = "";

    newTask.addEventListener("click", () => {
      newTask.classList.toggle("completed");
      taskObject.completed = !taskObject.completed;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
  }
});
