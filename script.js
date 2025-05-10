async function fetchCryptoData() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    const data = await response.json();
    displayCryptoData(data);
}

function displayCryptoData(data) {
    const container = document.getElementById('crypto-container');
    container.innerHTML = ''; // Очистка контейнера перед добавлением новых данных

    data.forEach(crypto => {
        const priceChange = crypto.price_change_percentage_1h;
        const color = priceChange > 0 ? 'green' : 'red';
        const cryptoItem = document.createElement('div');
        cryptoItem.className = 'crypto-item';
        cryptoItem.style.color = color;
        cryptoItem.textContent = `${crypto.name}: ${crypto.current_price} (${priceChange.toFixed(2)}%)`;
        container.appendChild(cryptoItem);
    });
}

fetchCryptoData();
setInterval(fetchCryptoData, 60000); // Обновление данных каждую минуту
