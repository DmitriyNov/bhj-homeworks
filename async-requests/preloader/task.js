const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

function processingResponse(response) {
    const valutes = JSON.parse(response).response.Valute;
    for (let valute in valutes) {
        itemsContainer.insertAdjacentHTML('beforeend',
        `<div class="item">
            <div class="item__code">
                ${valutes[valute].CharCode}
            </div>
            <div class="item__value">
                ${valutes[valute].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>`);
    }  
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.onreadystatechange = () => {
    loader.classList.remove('loader_active');
    if (xhr.readyState === 4) {
        processingResponse(xhr.responseText);
    }
}

