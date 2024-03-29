async function getRandomQuote() {
    const apiUrl = 'https://api.quotable.io/random';
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const quoteElement = document.getElementById('quote');
        quoteElement.textContent = data.content;
    } catch (error) {
        console.error('Error fetching quote:', error);
        const quoteElement = document.getElementById('quote');
        quoteElement.textContent = 'Failed to fetch quote. Please try again later.';
    }
}
