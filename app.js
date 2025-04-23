function fetchQuote(){
    const url = 'https://dolarapi.com/v1/dolares'
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('¡Error al obtener datos!');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Acá ves toda la respuesta
    })
    .catch(error => {
        console.error('Hubo un problema con la petición:', error);
    });
}
fetchQuote()