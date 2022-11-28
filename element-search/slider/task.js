const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const items = document.querySelectorAll('.slider__item');
itemsArr = Array.from(items);

//При отправке на доработку второго задания постараюсь сделать здесь задание с повышенным уровнем сложности
//"В решении старайтесь делать разделение кода. Регистрация обработчиков отдельно, управление слайдером отдельно." - не совсем понял, что разделить нужно, запсать циклы в отдельные функции?

arrowPrev.addEventListener('click', () => {
    for (let i = 0; i < itemsArr.length; i++) {
        if (itemsArr[i].className === 'slider__item slider__item_active') {
            itemsArr[i].classList.remove('slider__item_active');
            if (i === 0) {
                itemsArr[itemsArr.length - 1].classList.add('slider__item_active');
                break;
            } else {
                itemsArr[i - 1].classList.add('slider__item_active');
                break;
            }
        }
    }
})

arrowNext.addEventListener('click', () => {
    for (let i = 0; i < itemsArr.length; i++) {
        if (itemsArr[i].className === 'slider__item slider__item_active') {
            itemsArr[i].classList.remove('slider__item_active');
            if (i === itemsArr.length - 1) {
                itemsArr[0].classList.add('slider__item_active');
                break;
            } else {
                itemsArr[i + 1].classList.add('slider__item_active');
                break;
            }
        }
    }
})