const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const list = document.getElementById('tasks__list');

function addTask() {
    list.innerHTML +=
    `<div class="task">
        <div class="task__title">
            ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`
    input.value = '';
    Array.from(list.querySelectorAll('.task__remove')).forEach((element) => {
        element.addEventListener('click', (event) => {deleteTask(event)});
    });
}

function deleteTask(event) {
    event.preventDefault();
    event.target.closest('.task').outerHTML = '';
}

input.addEventListener('keydown', (event) => {  
    if (input. value !== '' && event.code === 'Enter') {
        addTask();
    }
})

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (input. value !== '') {
        addTask();
    }
})