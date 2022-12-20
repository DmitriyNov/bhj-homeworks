const responseArr = [
    'Я в своем познании настолько преисполнился',
    'Я как будто бы уже сто триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, как эта Земля',
    'Мне этот мир абсолютно понятен',
    'Я здесь ищу только одного - покоя',
    'Куда ни посмотри, хоть вглубь - бесконечно малое, хоть ввысь - бесконечное большое, понимаешь?',
    'А ты мне опять со своим вот этим',
    'Иди суетись дальше, это твоё распределение, это твой путь',
    'Твой горизонт познания и ощущения твоей природы, он несоизмеримо мелок по сравнению с моим, понимаешь?',
    'Я как будто бы уже давно глубокий старец, бессмертный, ну или там уже почти бессмертный',
    'Мне не важно на твои тачки, на твои яхты, на твои квартиры, там'
];
const chat = document.querySelector('.chat-widget');
const chatButton = document.querySelector('.chat-widget__side');
const messages = document.getElementById('chat-widget__messages');
const chatInput = document.getElementById('chat-widget__input');
const chatContainer = document.querySelector('.chat-widget__messages-container');
let intervalId = 0;

function sendMessage(time, message, id = '') {
    messages.innerHTML += 
    `<div class="message ${id}">
        <div class="message__time">${time}</div>
        <div class="message__text">
            ${message}
        </div>
    </div>`;
    autoScroll()
}

function autoScroll() {
    let chatHeigt = chatContainer.scrollHeight;
    chatContainer.scrollTo(0, chatHeigt);
}

function inaction(id) {
    //Вот по поводу этой функции, в задании точно не указано, как нужно отправлять сообщения спустя тридцать секунд без активности. Я сделал, чтобы интервал сбрасывался не по отправке сообщения, а по любому вводу в инпут
    chatInput.addEventListener('keydown', () => {
        clearInterval(intervalId);
        intervalId = setInterval(inaction, 3000);
    })
    let time = `${new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}`;
    sendMessage(time, responseArr[Math.floor(Math.random() * 10)]);
    clearInterval(intervalId);
}

chatButton.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
})

//Почему-то я не догадался, что кейдаун можно вешать на отдельные элементы, думал, так не будет работать
chatInput.addEventListener('keydown', (event) => {
    if (chatInput.value !== '' && event.code === 'Enter') {
        let time = `${new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}`;
        sendMessage(time, chatInput.value, 'message_client');
        chatInput.value = '';
        setTimeout(() => {
            sendMessage(time, responseArr[Math.floor(Math.random() * 10)]);
        }, 1000)
        clearInterval(intervalId);
        intervalId = setInterval(inaction, 3000);
    }
})


