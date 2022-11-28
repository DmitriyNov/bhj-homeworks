getHole = index => document.getElementById(`hole${index}`);
const hitСounter = document.getElementById('dead');
const missСounter = document.getElementById('lost');

// На лекции мы не касались обработчика событий. 
// Почему в данном сучае он сработал, а onclick нет? Они же оба выполняются асинхронно?

for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            hitСounter.textContent = +hitСounter.textContent + 1;
        } else {
            missСounter.textContent = +missСounter.textContent + 1;
        }
        if (hitСounter.textContent > 9) {
            alert('Победа');
            hitСounter.textContent = 0;
            missСounter.textContent = 0;
        }
        if (missСounter.textContent > 4) {
            alert('Поражение');
            hitСounter.textContent = 0;
            missСounter.textContent = 0;
        }
    })
}