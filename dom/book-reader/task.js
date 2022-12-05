const bookControls = Array.from(document.querySelectorAll('.book__control a'));
const book = document.getElementById('book');

function changingParameters(event) {
    let propertyName = Object.keys(event.target.dataset)[0];
    let propertyValue = Object.values(event.target.dataset)[0];
    //Мне кажется, что я пошёл сложным путём и всё это можно реализовать проще, без огромного числа логических конструкций, если я не вижу очевидного решения, прошу направить меня)
    if (propertyName === undefined) {
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        event.target.classList.add('font-size_active');
        book.classList.remove('book_fs-big', 'book_fs-small');
    } else if (propertyName === 'size') {
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        event.target.classList.add('font-size_active');
        book.classList.remove('book_fs-big', 'book_fs-small');
        book.classList.add(`book_fs-${propertyValue}`);
    } else if (propertyName === 'textColor') {
        event.target.closest('.book__control_color').querySelector('.color_active').classList.remove('color_active');
        event.target.classList.add('color_active');
        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
        book.classList.add(`book_color-${propertyValue}`);
    } else if (propertyName === 'bgColor') {
        event.target.closest('.book__control_background').querySelector('.color_active').classList.remove('color_active');
        event.target.classList.add('color_active');
        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
        book.classList.add(`book_bg-${propertyValue}`);
    }
    event.preventDefault();
}

bookControls.forEach((item) => {
    item.addEventListener('click', changingParameters)
})