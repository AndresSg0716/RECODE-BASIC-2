document.querySelector('#addProduct').addEventListener('click', function() {
    const productName = document.querySelector('#productName').value;
    const productPrice = parseFloat(document.querySelector('#productPrice').value);
    
    if (productName && productPrice) {
        const productList = document.querySelector('#productItems');
        const listItem = document.createElement('li');
        listItem.textContent = `${productName}: $${productPrice.toFixed(2)}`;
        listItem.dataset.price = productPrice;
        productList.appendChild(listItem);
        
        document.querySelector('#productName').value = '';
        document.querySelector('#productPrice').value = '';
    }
});

document.querySelector('#calculate').addEventListener('click', function() {
    const productItems = document.querySelectorAll('#productItems li');
    let totalWithoutDiscount = 0;
    let totalWithDiscount = 0;
    const discountThreshold = 100;
    const discountRate = 0.10;

    productItems.forEach(item => {
        const price = parseFloat(item.dataset.price);
        totalWithoutDiscount += price;

        if (price > discountThreshold) {
            totalWithDiscount += price - (price * discountRate);
        } else {
            totalWithDiscount += price;
        }
    });

    document.querySelector('#totalWithoutDiscount').textContent = `Total sin descuento: $${totalWithoutDiscount.toFixed(2)}`;
    document.querySelector('#totalWithDiscount').textContent = `Total con descuento: $${totalWithDiscount.toFixed(2)}`;
});
