const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signinForm = document.getElementById('signin__form');
const signinButton = document.getElementById('signin__btn');

signinButton.addEventListener('click', (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    const form = new FormData(signinForm);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        const response = xhr.response;
        if (response.success) {
            localStorage.id = response.user_id;
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            userId.textContent = response.user_id;
        } else {
            alert('Неверный логин или пароль');
        }
    })
    xhr.send(form);
})

if (localStorage.id) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = localStorage.id;
}