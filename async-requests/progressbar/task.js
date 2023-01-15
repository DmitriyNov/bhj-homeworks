const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(new FormData(form));
    xhr.addEventListener('progress', () => {
        const progressEvent = new ProgressEvent();
        progress.value = progressEvent.loaded / progressEvent.total;
    })
})