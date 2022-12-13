const checks = Array.from(document.querySelectorAll('.interest__check'));

//Получилось как-то много кода, сложно добираться до нужных элементов, мне кажется, можно проще сделать, плюс хочу сделать задание с повышенной сложностью, просто не успеваю, лучше отправьте это на дороботку, заодно доделаю 
function groupChecked(event) {  
    if (event.currentTarget.closest('li').querySelector('ul') !== null && event.currentTarget.checked) {
        Array.from(event.currentTarget.closest('li').querySelector('ul').querySelectorAll('.interest__check')).forEach((item) => {
            item.checked = true;
        })
    } else if (event.currentTarget.closest('li').querySelector('ul') && !event.currentTarget.checked) {
        Array.from(event.currentTarget.closest('li').querySelector('ul').querySelectorAll('.interest__check')).forEach((item) => {
            item.checked = false;
        })
    }
}

checks.forEach((item) => {
    item.addEventListener('click', groupChecked);
})