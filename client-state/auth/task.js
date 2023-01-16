const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signinForm = document.getElementById('signin__form');
const signinButton = document.getElementById('signin__btn');

signinButton.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    const form = new FormData(signinForm);
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send();
    xhr.addEventListener('readystatechange', () => {
        const response = JSON.parse(xhr.responseText);
        if (response.success) {
            localStorage.id = response.userId;
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            userId.textContent = response.userId;
        } else {
            alert('Неверный логин или пароль');
        }
    })
})

if (localStorage.id) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = localStorage.id;
}