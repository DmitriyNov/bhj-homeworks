debugger
Array.from(document.querySelectorAll('.menu__link')).forEach((item) => {
    item.addEventListener('click', function () {
        //Что-то ничего не работает у меня, как я понимаю, не определяется контекст, хотя вроде должен. Пробовал также через event.currentTarget, не работает
        if (this.querySelector('.menu__item') !== null) {
            this.querySelector('.menu__item').classList.add('modal_active');
            return false;
        }
    })
})