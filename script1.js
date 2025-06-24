document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("addBtn");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.classList.add("task-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";

    checkbox.addEventListener("change", function () {
      li.classList.toggle("completed", checkbox.checked);
    });

    removeBtn.addEventListener("click", function () {
      li.remove();
    });
  }

  addBtn.addEventListener("click", addTask);

  taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") addTask();
  });
});
