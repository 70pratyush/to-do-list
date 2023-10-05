function addTask(){
    const textInput = document.querySelector("#task-input");
    const textTask = textInput.value.trim();

    if (textTask !== "") {
        const taskList = document.querySelector("#task-list");
        const newTask = document.createElement("li");
        newTask.innerHTML = 
            `<span>${textTask}</span>
            <button onclick="deleteTask(this)">Delete</button>`;

        taskList.appendChild(newTask);
        textInput.value = "";
    }
}

function deleteTask(button){
    const taskList = document.querySelector("#task-list");
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}