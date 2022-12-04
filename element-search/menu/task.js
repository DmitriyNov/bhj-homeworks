function menuOpening(event) {
    const menuItem = this.closest('.menu__item');
    const menuSub = menuItem.querySelector('.menu_sub');
    if (menuSub !== null) {
        //Попробовал реализвать задание повышенной сложности "Одновременно не должно быть открыто более одного вложенного меню", у меня почему-то не всегда работает preventDefault, иногда перезагружается страница
        if (document.querySelector('.menu_active') !== null) {
            document.querySelector('.menu_active').remove('menu_active');
        }
        menuSub.classList.toggle('menu_active');
        event.preventDefault();
    }
}

Array.from(document.querySelectorAll('.menu__link')).forEach((item) => {
    item.addEventListener('click', menuOpening)
})