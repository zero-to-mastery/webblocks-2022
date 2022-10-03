const themeToggler = document.querySelector(".theme-ctrl");
const taskList = document.querySelector(".task-list");
const addButton = document.querySelector(".user-task-add");
const taskInput = document.getElementById("user-task-input");

// IMPLEMENT DARK MODE
function toggleTheme() {
    const docBody = document.body;
    const themeIcon = document.querySelector(".theme-ctrl i");

    if (themeToggler.classList.contains("to-dark")) {
        docBody.setAttribute("class", "dark-mode");
        themeToggler.classList.remove("to-dark");
        themeToggler.classList.add("to-light");

        // CHANGE THEME ICON TO SUN
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        docBody.removeAttribute("class");
        themeToggler.classList.remove("to-light");
        themeToggler.classList.add("to-dark");

        // CHANGE THEME ICON TO MOON
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
}

themeToggler.addEventListener("click", toggleTheme);

// COMPLETE TASK
function completeTask(e) {
    const eventTarget = e.target;

    if (eventTarget.classList.contains("user-task-check")) {
        eventTarget.parentElement.previousElementSibling.style.textDecoration = "line-through";
    } else if (eventTarget.classList.contains("fa-check")) {
        eventTarget.parentElement.parentElement.previousElementSibling.style.textDecoration = "line-through";
    }
}

// DELETE ITEMS FROM TASK LIST
function deleteTask(e) {
    const eventTarget = e.target;

    if (eventTarget.classList.contains("user-task-delete")) {
        eventTarget.parentElement.parentElement.remove();
    } else if (eventTarget.classList.contains("fa-trash")) {
        eventTarget.parentElement.parentElement.parentElement.remove();
    }
}

// ADD ITEMS TO TASK LIST
function addTask() {
    const taskValue = taskInput.value;

    if (taskValue !== '') {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const task = document.createTextNode(taskValue);
        const div = document.createElement("div");
        const checkButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        const checkIcon = document.createElement("i");
        const deleteIcon = document.createElement("i");

        span.setAttribute("class", "task");
        span.appendChild(task);

        checkButton.setAttribute("type", "button");
        checkButton.className = "btn user-task-check"
        checkButton.setAttribute("title", "Complete task");

        checkIcon.className = "fa-solid fa-check";
        checkButton.appendChild(checkIcon);

        deleteButton.setAttribute("type", "button");
        deleteButton.className = "btn user-task-delete"
        deleteButton.setAttribute("title", "Delete task");

        deleteIcon.className = "fa-solid fa-trash";
        deleteButton.appendChild(deleteIcon);

        div.setAttribute("class", "task-edit-ctrls");
        div.appendChild(checkButton);
        div.appendChild(deleteButton);

        li.appendChild(span);
        li.appendChild(div);

        taskList.appendChild(li);

        taskInput.value = '';

        // LISTEN FOR CLICK EVENT ON CHECK BUTTON
        checkButton.addEventListener("click", completeTask);

        // LISTEN FOR CLICK EVENT ON DELETE BUTTON
        deleteButton.addEventListener("click", deleteTask);
    }
}

addButton.addEventListener("click", addTask);

// ADD TASK TO TASK LIST ON PRESSING "ENTER" KEY
taskInput.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        addTask();
    }
});

