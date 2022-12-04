function menuOpening(event) {
    const menuItem = this.closest('.menu__item');
    const menuSub = menuItem.querySelector('.menu_sub');
    if (menuSub !== null) {
        let activeMenu = document.querySelector('.menu_active');
        if (activeMenu !== null && activeMenu != menuSub) {
            activeMenu.classList.toggle('menu_active');
        }
        menuSub.classList.toggle('menu_active');
        event.preventDefault(); 
    }
}

Array.from(document.querySelectorAll('.menu__link')).forEach((item) => {
    item.addEventListener('click', menuOpening)
})