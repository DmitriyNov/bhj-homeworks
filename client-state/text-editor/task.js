const text = document.getElementById('editor');
const clear = document.getElementById('button');

if (localStorage.text) {
    text.value = localStorage.text
}

text.addEventListener('keydown', () => {
    localStorage.text = text.value;
})

clear.addEventListener('click', () => {
    text.value = '';
    localStorage.text = '';
})