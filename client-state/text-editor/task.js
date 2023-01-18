const text = document.getElementById('editor');
const clear = document.getElementById('button');

text.value = localStorage.getItem('text');

text.addEventListener('keydown', () => {
    localStorage.text = text.value;
})

clear.addEventListener('click', () => {
    text.value = '';
    localStorage.text = '';
})