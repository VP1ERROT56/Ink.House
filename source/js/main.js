document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burgers").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open")
    })
})

// Функция для отображения карточек по категориям
function showCategory(category) {
    // Получаем все карточки
    const cards = document.querySelectorAll('.card');

    // Перебираем все карточки
    cards.forEach(card => {
        // Сравниваем атрибут data-category карточки с выбранной категорией
        if (card.getAttribute('data-category') === category || category === 'all') {
            card.style.display = 'block'; // Показываем карточку
        } else {
            card.style.display = 'none'; // Скрываем карточку
        }
    });
}

// Функция для обновления классов активной ссылки
function updateActiveLink(activeLink) {
    // Находим все ссылки в навигации
    const links = document.querySelectorAll('.btn_city a');

    // Убираем класс 'active' у всех ссылок и добавляем класс к активной
    links.forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// Обработчик события для ссылок
document.querySelectorAll('.btn_city a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Отменяем переход по ссылке
        const category = this.getAttribute('onclick').match(/'([^']+)'/)[1]; // Извлекаем категорию из onclick
        
        showCategory(category); // Вызываем функцию показа нужной категории
        updateActiveLink(this); // Обновляем активную ссылку
    });
});
window.onload = function() {
    showCategory('frans'); // Замените 'fruit' на желаемую категорию по умолчанию
}; // Можно заменить на 'all', если нужно изначально показывать все карточки