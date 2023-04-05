// Step 1 - Find Element
let addTaskButton = document.getElementById('add-task');
let newTaskInput = document.getElementById('task-input');
let todoListContainer = document.getElementById('todo-list');
let templateContainer = document.getElementById("list-item-template");
let template = templateContainer.innerHTML

let showActiveButton = document.getElementById("show-active");

//Step 2 Write the behaviour
function onAddTaskClicked(event){
    let taskName = newTaskInput.value;
    newTaskInput.value = "";


    if (taskName != ""){
    let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);

    saveTask(taskName, false);
}
}

function showActiveTasks(e){
    let tasks = docum.getElementsByClassName("task");
    console.log(tasks);

    for(let i=0; i < tasks.length; i++){
        if (tasks[i].classList.contains("completed")){
            tasks[i].style.display = "none"
        } else{
            tasks [i].style.display = "block";
        }
    }

}


function onTodoListClicked(e){
    let targetElement = event.target;


    while (!targetElement.classList.contains("task")){
        targetElement = targetelement.parentElement;
    }

    let checkbox = targetElement.querySelector(".checkbox")
    if (checkbox.checked){
        targetElement.classList.add("completed");
    } else{
        targetElement.classList.remove("completed");
    
    
    }
    let taskNameElement = targetElement.querySelector(".task-name");
    let taskName = taskNameElement.innerText;
    saveTask(taskName, checkbox.checked)


}

    



function onTodoListClicked(event){
    let targetElement = e.target;
    
    while (!targetElement.classList.contains("task")){
        targetElement = targetElement.parentElement;
    } 
    let checkbox = targetElement.querySelector(".checkbox");
    if (checkbox.checked){
        targetElement.classList.add("completed") 
    } else {
        targetElement.classList.remove("completed")
    }
}

function saveTask(name, IsCompleted){
    localStorage.setItem(name, IsCompleted)
}

function renderTasks(){
    for(let i=0; i<localStorage.length; i++){
        let taskName = localStorage.key(i);
        let isCompleted = localStorage.getItem(taskName) == "true";
        let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
        if (!isCompleted){
            todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
        }
    }

}

//Step 3 link to the event handler
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodoListClicked);
showActiveButton.addEventListener('click', showActiveTasks)
renderTasks();

//1. create list item
//2. set the text for the list item to the taskName
//3. add the list item to the ul element, todoListContainer

//4. modify your code to now include a checkbox as part of the list item

//5. modify your code   