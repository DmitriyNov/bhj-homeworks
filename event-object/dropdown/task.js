const button = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const listItems = Array.from(document.querySelectorAll('.dropdown__item'));

function listSwitch() {
    list.classList.toggle('dropdown__list_active')
}

function valueSwitch(event) {
    let value = event.target.textContent;
    button.textContent = value;
    listSwitch();
    event.preventDefault();
}

button.addEventListener('click', listSwitch);
listItems.forEach((element) => {
    element.addEventListener('click', valueSwitch);
})