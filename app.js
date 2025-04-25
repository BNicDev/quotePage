function render(data) {
    renderQuotes(data);
    console.log(data); // Para inspeccionar los datos si querés
}

function renderQuotes(info) {
    const container = document.getElementById('quotes-container');

    const cardsHTML = info.map(quote => `
        <div class="cards">
            <div class="quote-name">${quote.nombre || quote.casa}</div>
            <div class="compra-quote">Compra: $${quote.compra}</div>
            <div class="venta-quote">Venta: $${quote.venta}</div>
        </div>
    `).join('');

    container.innerHTML = cardsHTML;
}

function fetchQuote() {
    const url = 'https://dolarapi.com/v1/dolares';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('¡Error al obtener datos!');
            }
            return response.json();
        })
        .then(data => {
            render(data);
        })
        .catch(error => {
            console.error('Hubo un problema con la petición:', error);
        });
}

fetchQuote();
