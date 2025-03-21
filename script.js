// Dados de exemplo (substitua por dados reais coletados de um site de viagens)
const expenses = {
    economy: 100, // Custo diário em dólares
    medium: 200,
    luxury: 300,
};

// Chaves de API
const aviationstackApiKey = 'd512dab53d65a46b102b176d4f9630fe';
const exchangeRatesApiKey = 'a363f8aad44faf9657f4f4817358f8d0';

// Função para buscar preços de voos (exemplo com Aviationstack)
async function fetchFlightPrices(destination) {
    const url = `http://api.aviationstack.com/v1/flights?access_key=${aviationstackApiKey}&arr_iata=${destination}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.data; // Retorna os dados dos voos
    } catch (error) {
        console.error('Erro ao buscar voos:', error);
        return [];
    }
}

// Função para converter moeda (exemplo com Exchange Rates API)
async function convertCurrency(amount, fromCurrency, toCurrency) {
    const url = `https://api.exchangeratesapi.io/v1/convert?access_key=${exchangeRatesApiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.result; // Retorna o valor convertido
    } catch (error) {
        console.error('Erro ao converter moeda:', error);
        return amount; // Retorna o valor original em caso de erro
    }
}

// Calculadora de Gastos
document.getElementById('expenseForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const duration = parseInt(document.getElementById('duration').value);
    const tripType = document.getElementById('tripType').value;
    const currency = document.getElementById('currency').value;

    // Busca preços de voos para a Rússia (exemplo com Moscou - código IATA: MOW)
    const flights = await fetchFlightPrices('MOW');
    if (flights.length === 0) {
        document.getElementById('result').innerText = 'Não foi possível buscar os preços.';
        return;
    }

    // Filtra pelo tipo de viagem (exemplo simplificado)
    const flightPrice = flights[0].price; // Pega o preço do primeiro voo
    const total = flightPrice * duration;

    // Converte para a moeda local
    const convertedAmount = await convertCurrency(total, 'USD', currency);

    // Exibe o resultado
    document.getElementById('result').innerText = `Custo estimado: ${convertedAmount.toFixed(2)} ${currency}`;
});

// Área com DeepSeek (simulação)
function askDeepSeek() {
    const question = document.getElementById('question').value;
    const answer = `DeepSeek: Para "${question}", o custo estimado é $${Math.floor(Math.random() * 5000)}.`;
    document.getElementById('answer').innerText = answer;
}
