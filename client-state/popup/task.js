const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

modal.classList.add('modal_active');

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    localStorage.setItem('modalClose', 'true');
})

if (localStorage.modalClose) {
    modal.classList.remove('modal_active');
}