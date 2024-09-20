const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

const modal = document.querySelector("#confirmation-modal");
const confirmDeleteBtn = document.querySelector("#confirm-delete");
const cancelDeleteBtn = document.querySelector("#cancel-delete");
const closeBtn = document.querySelector(".close");

let taskToDelete = null;
// let taskToEdit = null;

function addTask(e) {
    e.preventDefault();

    const taskText = taskInput.value;
    if (taskText === "") {
        alert("enter the task first");
        return;
    }
    const li = document.createElement('li');
    const div = document.createElement('div');
    
    li.textContent = taskText;
    taskInput.value = '';
    taskList.appendChild(li);


    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

        // adding editing button
    const editBtn = document.createElement('button');
    editBtn.classList.add("edit");
    editBtn.textContent = "Edit";
    editBtn.style.fontWeight = 'bold';
    editBtn.style.marginRight = '10px';
    buttonContainer.appendChild(editBtn);

    // adding delete button  
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.fontWeight = 'bold';
    buttonContainer.appendChild(deleteBtn); 

    li.appendChild(buttonContainer);
}

// opening the confirmation modal to confirm the deleting of item
function deleteTask(e) {
    if (e.target.classList.contains("delete")) {
        taskToDelete = e.target.parentElement;
        modal.style.display = 'block';    
    }
    // else if(e.target.classList.contains("edit")){
    //     taskToEdit = e.target.parentElement;

    // }
}

// confirming the item to delete
confirmDeleteBtn.addEventListener('click', function () {
    if (taskToDelete) {
        taskList.removeChild(taskToDelete);
        closeModal();
    }
})

cancelDeleteBtn.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);


// The closeModal() function is only called if the exact e.target is the modal element itself (not any child elements inside the modal). 
// This prevents closing the modal when inner elements or child are clicked
// window.addEventListener('click', function(e) {
//     if (e.target === modal) {
//         closeModal();
//     }
// });
// where as in this case it cover the entier modal including its inner element or child so no matter where ever you click the modal will close
modal.addEventListener('click', closeModal)


function closeModal() {
    modal.style.display = 'none'; 
    taskToDelete = null;
}



taskForm.addEventListener("submit", addTask);
taskList.addEventListener("click", deleteTask);

