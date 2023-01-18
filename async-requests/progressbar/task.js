const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(new FormData(form));
    const progressEvent = new ProgressEvent();
    xhr.addEventListener('progress', () => {
        progress.value = progressEvent.loaded / progressEvent.total;
    })
})