const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const list = document.getElementById('tasks__list');

function addTask() {
    //Не мог понять, почему у меня обработчики пропадали, а оказывается оператор += виноват был, и ведь после того, как Вы указали на ошибку, увидел в девтулс, что обновляются все блоки, а когда сам искал ошибку, не понял этого. Надеюсь, через какое-то время научусь видеть всё это
    list.insertAdjacentHTML('beforeend',
    `<div class="task">
        <div class="task__title">
            ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`);
    input.value = '';
    //Я не могу додуматься, либо найти где-нибудь как написать селектор в одном методе querySelector, который я написал ниже в двух, выглядит не очень, но работает
    list.querySelector('.task:last-child').querySelector('.task__remove').addEventListener('click', (event) => deleteTask(event));
}

function deleteTask(event) {
    event.preventDefault();
    event.target.closest('.task').outerHTML = '';
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (input.value.trim() !== '') {
        addTask();
    }
})