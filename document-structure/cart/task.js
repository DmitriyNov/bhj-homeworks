const quantityControls = Array.from(document.querySelectorAll('.product__quantity-controls'));
const cart = document.querySelector('.cart__products');
const addButtons = Array.from(document.querySelectorAll('.product__add'));

function changingQuantity(event) {
    if (event.target.className.includes('product__quantity-control_dec') && event.currentTarget.querySelector('.product__quantity-value').innerText > 1) {
        event.currentTarget.querySelector('.product__quantity-value').innerText--  
    }
    if (event.target.className.includes('product__quantity-control_inc')) {
        event.currentTarget.querySelector('.product__quantity-value').innerText++;
    }
}

function addToCart(id, src, qty, event) {
    let cartsItem = Array.from(document.querySelectorAll('.cart__product')).find((element) => {
        return element.dataset.id === id;
    })
    if (cartsItem) {
        cartsItem.querySelector('.cart__product-count').textContent = +cartsItem.querySelector('.cart__product-count').innerText + +qty;
    } else {
        cart.innerHTML +=
        `<div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${src}">
            <div class="cart__product-count">${qty}</div>
        </div>` 
    }
}

quantityControls.forEach((element) => {
    element.addEventListener('click', (event) => {
        changingQuantity(event);
    })
})

addButtons.forEach((element) => {
    element.addEventListener('click', (event) => {
        let id = event.target.closest('.product').dataset.id;
        let src = event.target.closest('.product').querySelector('.product__image').getAttribute('src');
        let qty = event.target.closest('.product').querySelector('.product__quantity-value').textContent;
        addToCart(id, src, qty);
    })
})