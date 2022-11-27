const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const text = document.createElement('p');
text.innerHTML = 'Скорость клика <span id = "clicker__speed">0.00<span>'
clickerCounter.after(text);
const clickerSpeed = document.getElementById('clicker__speed');

let currentTime = Date.now();

cookie.onclick = () => {
    clickerCounter.textContent = +clickerCounter.textContent + 1;
    if (cookie.width == 200) {
        cookie.width = 210;
    } else {
        cookie.width = 200;
    }
    let clickTime = Date.now();
    clickerSpeed.textContent = (1 / ((clickTime - currentTime) / 1000)).toFixed(2);
    currentTime = clickTime;
}