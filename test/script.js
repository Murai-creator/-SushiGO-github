// Корзина
let cart = [
    { id: 1, name: "Товар 1", price: 100 },
    { id: 2, name: "Товар 2", price: 200 },
    { id: 3, name: "Товар 3", price: 300 },
];

// Вывести корзину на страницу
function renderCart() {
    let cartHtml = "";
    for (let i = 0; i < cart.length; i++) {
        cartHtml += `<p>${cart[i].name} - ${cart[i].price}₽</p>`;
    }
    document.getElementById("cart").innerHTML = cartHtml;
}

renderCart();

// Обработать форму оплаты
document.getElementById("pay-btn").addEventListener("click", function (e) {
    e.preventDefault();

    // Получить данные из формы
    let name = document.getElementById("name").value;
    let firstname = document.getElementById("firstname").value;
    let number = document.getElementById("number").value;
    let cardNumber = document.getElementById("card-number").value;
    let expDate = document.getElementById("exp-date").value;
    let cvc = document.getElementById("cvc").value;

    // Проверить форму на заполненность
    if (name === "" || firstname=== "" || number=== "" || cardNumber === "" || expDate === "" || cvc === "") {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    // Процесс оплаты (эмулируем)
    alert("Оплата успешна!");
    // В реальности здесь должна быть логика оплаты с помощью платежной системы

    // Очистить форму
    document.getElementById("payment-form").reset();
});