// Загрузка блоков при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    loadBlock('header', 'blocks/header.html');
    loadBlock('hero', 'blocks/hero.html');
    loadBlock('about', 'blocks/about.html');
    loadBlock('services', 'blocks/services.html');
    loadBlock('portfolio', 'blocks/portfolio.html');
    loadBlock('testimonials', 'blocks/testimonials.html');
    loadBlock('contact', 'blocks/contact.html');
    loadBlock('footer', 'blocks/footer.html');
});

// Функция загрузки блоков
function loadBlock(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading block:', error);
            document.getElementById(elementId).innerHTML = '<p>Ошибка загрузки блока</p>';
        });
}
