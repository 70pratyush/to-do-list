const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

function addTask(e) {
    e.preventDefault();

    const taskText = taskInput.value;
    if (taskText === "") {
        alert("enter the task first");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;
    taskInput.value = '';
    taskList.appendChild(li);
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.fontWeight = 'bold';
    li.appendChild(deleteBtn);   
}

function deleteTask(e) {
    if (e.target.classList.contains("delete")) {
        const li = e.target.parentElement;

        const userConfirm = confirm("Are you sure?")
        if (userConfirm) {
            taskList.removeChild(li);
            console.log("Item removed");
            
        }
    }
}

taskForm.addEventListener("submit", addTask);
taskList.addEventListener("click", deleteTask)






























































