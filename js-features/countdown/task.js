const seconds = document.getElementById('timer');
const minutes = document.createElement('span');
const hours = document.createElement('span');
minutes.setAttribute('id', 'min');
hours.setAttribute('id', 'hrs');
seconds.before(minutes);
seconds.before(':');
minutes.before(hours);
minutes.before(':');
minutes.textContent = '01';
hours.textContent = '01';

const link = document.createElement('a');
link.setAttribute('href', 'https://i.gifer.com/4BoI.gif');
link.setAttribute('download', '');
link.setAttribute('target', '_blank');
seconds.after(link);

let seconds_id = setInterval(() => {
    if (+seconds.textContent <= 10) {
        seconds.textContent = '0' + (+seconds.textContent - 1);
    } else {
        seconds.textContent = +seconds.textContent - 1;
    }
    if (seconds.textContent == '00' && minutes.textContent == '00' && hours.textContent == '00') {
        clearInterval(seconds_id);
        link.click(); //Вроде сделал всё, как в инструкции, всё равно открывает в браузере
        alert('Вы победили в конкурсе!');
    } else if (seconds.textContent == '00') {
        setTimeout(() => {
            seconds.textContent = 59;
        }, 1000)
    }
}, 1000);

let minutes_id = setInterval(() => {
    if (+minutes.textContent <= 10) {
        minutes.textContent = '0' + (+minutes.textContent - 1);
    } else {
        minutes.textContent = +minutes.textContent - 1;
    }
    if (minutes.textContent == '00' && hours.textContent == '00') {
        clearInterval(minutes_id);
    } else if (minutes.textContent == '00') {
        setTimeout(() => {
            minutes.textContent = 59;
            if (+hours.textContent <= 10) {
                hours.textContent = '0' + (+hours.textContent - 1);
            } else {
                hours.textContent = +hours.textContent - 1;
            }
        }, 60000)
    }
}, 60000);

let hours_id = setInterval(() => {
    if (+hours.textContent <= 10) {
        hours.textContent = '0' + (+hours.textContent - 1);
    } else {
        hours.textContent = +hours.textContent - 1;
    }
    if (hours.textContent == '00') {
        clearInterval(hours_id);
    }
}, 3600000);

//Как-то слишком много кода получилось, наверное можно всё гораздо короче написать, через цикл и с таймаутами, а не с интервалами, но вроде всё работает правильно