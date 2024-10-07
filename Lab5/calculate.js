// script.js
document.getElementById('calculate').addEventListener('click', function() {
    const productPrice = parseFloat(document.getElementById('product').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const totalCost = productPrice * quantity;

    document.getElementById('result').innerText = `Стоимость заказа: ${totalCost} руб.`;
});

