const addBtn = document.querySelector("#add-btn");

//função que add tarefa
function addTask(){

    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if (taskTitle) {
        //clone do template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true); 

        //adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remove as classes desneessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adicionar tarefas na lista
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        //edicionar evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        })

        //adicionar evento de tarefa completa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        });

        //limpar texto input
        document.querySelector("#task-title").value = "";
    }
};

//função de tarefa completada
function completeTask(task) {
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}

//função de remover tarefas
function removeTask(task) {
   task.parentNode.remove(true);
}

//evento de add tarefa
addBtn.addEventListener("click", function(e) {

    e.preventDefault();
   
    addTask();
    
});