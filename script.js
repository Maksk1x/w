const news = [
    {
        title: "Новость 3",
        date: "03 Января 2024",
        content: "Еще одна новость..."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    
    news.forEach(item => {
        const article = document.createElement('article');
        article.className = 'news-card';
        article.innerHTML = `
            <h2>${item.title}</h2>
            <p class="date">${item.date}</p>
            <p>${item.content}</p>
        `;
        main.appendChild(article);
    });
});
