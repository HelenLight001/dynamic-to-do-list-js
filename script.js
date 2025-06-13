document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Step 2: Define the function to add a task
  function addTask() {
    // Get and trim the input value

    const taskText = taskInput.value.trim();

    // If input is empty, alert the user
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new <li> element
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a remove button for the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Add click event to remove the task when button is clicked
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
  }

  // Step 3: Attach event listener to the Add Task button
  addButton.addEventListener("click", addTask);

  // Step 4: Allow adding task by pressing Enter key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
