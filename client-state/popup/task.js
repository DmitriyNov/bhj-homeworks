const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'modalClose=true';
})

//Не знаю, зачем написал такую функцию, но вроде должна работать, если помимо нашей добавленной куки будут другие
function convertCookie() {
    let arr = document.cookie.split('; ');
    let obj = {}
    arr.forEach((element) => {
        let key = element.split('=')[0];
        let name = element.split('=')[1];
        //Очень своеобразный костыль получился, но так точно получится правильное логическое значение
        if (name === 'true') {
            eval(name);
        }
        obj[key] = name;
    })
    return obj;
}

if (document.cookie) {
    let cookie = convertCookie();
    if (cookie.modalClose) {
        modal.classList.remove('modal_active');
    } else {
        modal.classList.add('modal_active');
    }
} else {
    modal.classList.add('modal_active');
}

