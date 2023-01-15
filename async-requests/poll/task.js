const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');

function processingResponse(response) {
    const titleText = JSON.parse(response).data.title;
    title.innerText = titleText;
    const answerArr = JSON.parse(response).data.answers;
    answerArr.forEach((element) => {
        answers.insertAdjacentHTML('beforeend',
        `<button class="poll__answer">
            ${element}
        </button>`);
    });
    Array.from(document.querySelectorAll('.poll__answer')).forEach((element) => {
        element.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
    })
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4) {
        processingResponse(xhr.responseText);
    }
});