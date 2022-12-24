const forTips = Array.from(document.querySelectorAll('.has-tooltip'));

function addTip(element) {
    text = element.title;
    element.insertAdjacentHTML('afterEnd', `<div class="tooltip" style="">${text}</div>`);
    console.log(element.getBoundingClientRect().left, element.getBoundingClientRect().top)
}

function showTip(event) {
    event.preventDefault();
    let tip = event.target.nextSibling;
    if (document.querySelector('.tooltip_active') !== null && tip.className === 'tooltip') {
        document.querySelector('.tooltip_active').classList.remove('tooltip_active');
    }
    tip.setAttribute('style', `left: ${event.target.getBoundingClientRect().left}px; top: ${event.target.getBoundingClientRect().top + 20}px`);
    tip.classList.toggle('tooltip_active');
}

forTips.forEach((element) => {
    addTip(element);
    element.addEventListener('click', showTip);
})