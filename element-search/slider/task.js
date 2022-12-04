const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const items = Array.from(document.querySelectorAll('.slider__item'));
const dots = Array.from(document.querySelectorAll('.slider__dot'));

function switchSlide(index) {
    let activeIndex = items.findIndex(element => element.className === 'slider__item slider__item_active');
    items[activeIndex].classList.remove('slider__item_active');
    dots[activeIndex].classList.remove('slider__dot_active');
    let currentIndex;
    if (index < 0) {
        currentIndex = items.length - 1;
    } else if (index > items.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    items[currentIndex].classList.add('slider__item_active');
    dots[currentIndex].classList.add('slider__dot_active');
}

arrowPrev.addEventListener('click', () => {
    let index = items.findIndex(element => element.className === 'slider__item slider__item_active') - 1;
    switchSlide(index);
});

arrowNext.addEventListener('click', () => {
    let index = items.findIndex(element => element.className === 'slider__item slider__item_active') + 1;
    switchSlide(index);
});

dots.forEach((element) => {
    element.addEventListener('click', (event) => {
        let index = dots.indexOf(event.target);
        switchSlide(index);
    });
})
