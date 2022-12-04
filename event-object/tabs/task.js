const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContents = Array.from(document.querySelectorAll('.tab__content'));

function showContent(event) {
    let index = tabs.findIndex(element => element.className === 'tab tab_active');
    tabs[index].classList.remove('tab_active');
    tabsContents[index].classList.remove('tab__content_active');
    index = tabs.indexOf(event.target);
    tabs[index].classList.add('tab_active');
    tabsContents[index].classList.add('tab__content_active');
}

tabs.forEach((element) => {
    element.addEventListener('click', showContent);
})