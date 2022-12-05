const reveals = Array.from(document.querySelectorAll('.reveal'));

function showHidden() {
    let windowHeight = window.innerHeight;
    reveals.forEach((item) => {
        let top = item.getBoundingClientRect().top;
        // Наверное можно сделать как-то преключение через toggle
        if (top < windowHeight * 0.8) {
            item.classList.add('reveal_active');
        }
        if (top < windowHeight * 0.2 || top > windowHeight * 0.8) {
            item.classList.remove('reveal_active');
        }
    })
}

window.addEventListener('scroll', showHidden);
