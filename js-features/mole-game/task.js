getHole = index => document.getElementById(`hole${index}`);
const field = document.getElementById('hole-game');
const hitСounter = document.getElementById('dead');
const missСounter = document.getElementById('lost');


// Я не могу догадаться, как сделать, чтобы цикл выполнялся каждый раз, когда мы кликаем по полю. 
// То, что сейчас написано, не работает, наверное из-за вложеной функции в обработчике событий.
// Прошу натолкнуть на верную мысль 
field.onсlick = () => {
    for (let i = 1; i < 10; i++) {
        let hole = getHole(i);
        hole.onсlick = () => {
            if (hole.classList.contains('hole_has-mole')) {
                hitСounter.textContent = +hitСounter.textContent + 1;
            } else {
                missСounter.textContent = +missСounter.textContent + 1;
            }
        };
        if (hitСounter >= 9) {
            alert('Победа');
            hitСounter.textContent = 0;
            missСounter.textContent = 0;
        }
        if (missСounter >= 5) {
            alert('Поражение');
            hitСounter.textContent = 0;
            missСounter.textContent = 0;
        }
    }
}
