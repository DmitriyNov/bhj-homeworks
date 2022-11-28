debugger
const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const ShowSuccess = document.querySelector('.show-success');
const modalClose = document.querySelectorAll('.modal__close')

modalMain.classList.add('modal_active');

ShowSuccess.addEventListener('click', () => {
    modalSuccess.classList.add('modal_active');
})

Array.from(modalClose).forEach((index) => {
    index.addEventListener('click', () => {
        let modal = document.querySelector('.modal_active');
        modal.classList.remove('modal_active');
        })
})

