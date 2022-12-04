const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const items = Array.from(document.querySelectorAll('.slider__item'));
const dots = Array.from(document.querySelectorAll('.slider__dot'));

function nextSlide() {
    let index = items.findIndex(element => element.className === 'slider__item slider__item_active');
    items[index].classList.remove('slider__item_active');
    dots[index].classList.remove('slider__dot_active');
    index === items.length - 1 ? index = 0 : index++;
    items[index].classList.add('slider__item_active');
    dots[index].classList.add('slider__dot_active');
}

function prewSlide() {
    let index = items.findIndex(element => element.className === 'slider__item slider__item_active');
    items[index].classList.remove('slider__item_active');
    dots[index].classList.remove('slider__dot_active');
    index === 0 ? index = items.length - 1 : index--;
    items[index].classList.add('slider__item_active');
    dots[index].classList.add('slider__dot_active');
}

function dotSwitch(event) {
    let index = dots.findIndex(element => element.className === 'slider__dot slider__dot_active');
    items[index].classList.remove('slider__item_active');
    dots[index].classList.remove('slider__dot_active');
    index = dots.findIndex(element => element === event.target);
    items[index].classList.add('slider__item_active');
    dots[index].classList.add('slider__dot_active');
}

arrowPrev.addEventListener('click', prewSlide);
arrowNext.addEventListener('click', nextSlide);
dots.forEach((element) => {
    element.addEventListener('click', dotSwitch);
})
