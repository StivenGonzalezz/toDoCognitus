let taskContainer = document.getElementById("tasksContainert");

let tasks = []


function renderTasks(){
    taskContainer.innerHTML = ""

    tasks.map((task)=>{
    let newTask = `
        <article class="task">
            <div class="taskLeft">
                <span id=${task.id} class="checkboxCustom ${task.status ? 'active':''}" onclick="toggleStatus(${task.id})"></span>                       
                <h2 class="taskTittle">${task.name}</h2>
            </div>
            <button class="deleteTaskButton" onclick="deleteTask(${task.id})"><img src="images/icon-cross.svg" alt=""></button>
        </article>
    `;
    taskContainer.innerHTML = taskContainer.innerHTML + newTask

    })
}


function createTask() {
    let taskName = document.getElementById("taskInput");
    let taskId = createId()
    tasks.push({
        name: taskName.value,
        id: taskId,
        status : false
    })

    renderTasks()

    taskName.value = ""
}

function createId(){
    return  Math.floor(Math.random() * 999999)
}

function toggleStatus(id) {
    tasks = tasks.map((task)=>{ 
        if(task.id == id){
            task.status = !task.status
        }
        return task
    })
    renderTasks()
}

function deleteTask(id){
    tasks = tasks.filter((task)=>{
        return task.id != id
    })
    renderTasks()
}

function clearCompleted(){
    tasks = tasks.filter((task) =>{
        return !task.status
    })
    renderTasks()
}