let addTaskBtn = document.getElementById('addTaskBtn');
let taskInput = document.querySelectorAll('input');
let validationMessage = document.getElementById('validationMessage');
let noTask = document.getElementById('noTask');
let allTasks = document.getElementById('allTasks');

let noTasksChecker = () => {
    if (allTasks.childElementCount == 0){
        noTask.classList.remove('none');
    }
}
addTaskBtn.onclick = function () {
    if (taskInput[0].value.trim().length && taskInput[1].value.trim().length) {
        if (!validationMessage.classList.contains('none')) {
            validationMessage.classList.add('none')
        }
        noTask.classList.add('none')
        allTasks.innerHTML += `
        <div class='alert alert-info'> 
            ${taskInput[0].value.trim()}
            <i class="delete text-danger float-right fa-solid fa-rectangle-xmark"></i>
            <p class='float-right'>  ${taskInput[1].value.trim()} </p>
        </div>
        `
        taskInput[0].value = ''
        taskInput[1].value = ''

        // another solution :

        // document.onclick =  function (e) {
        //     var [...rest] = document.querySelectorAll('i.delete')
        //     return (rest.length == 0) ? noTask.classList.remove('none') : rest.map((item, index, array) => {
        //         item.onclick = function () {
        //             this.parentElement.remove() 
        //         }
        //     })
        // }
    } else {
        if (!taskInput[0].value.trim().length) {
            validationMessage.classList.remove('none')
            validationMessage.innerText = 'you must enter title'
        } else if (!taskInput[1].value.trim().length) {
            validationMessage.classList.remove('none')
            validationMessage.innerText = 'you must enter date'
        }
    }
}
closeValidationMessageBtn.addEventListener('click',function(){
    validationMessage.classList.add('none');
})
document.addEventListener('click', function(t){
    if (t.target.classList.contains('delete')){
        t.target.parentElement.remove();
        noTasksChecker();
    }
})