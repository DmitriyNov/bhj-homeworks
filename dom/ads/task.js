const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
let currentSpeed = rotatorCases[0].dataset.speed;

function switchCase() {
    clearInterval(intervalId);
    let currentActive = rotatorCases.indexOf(document.querySelector('.rotator__case_active'));
    rotatorCases[currentActive].classList.remove('rotator__case_active');
    if (currentActive >= rotatorCases.length - 1) {
        rotatorCases[0].classList.add('rotator__case_active');
        currentSpeed = rotatorCases[0].dataset.speed;
        rotatorCases[0].style.color = rotatorCases[0].dataset.color;
    } else {
        rotatorCases[currentActive + 1].classList.add('rotator__case_active');
        currentSpeed = rotatorCases[currentActive + 1].dataset.speed;
        rotatorCases[currentActive + 1].style.color = rotatorCases[currentActive + 1].dataset.color;
    }
    intervalId = setInterval(switchCase, currentSpeed);
}

let intervalId = setInterval(switchCase, currentSpeed);