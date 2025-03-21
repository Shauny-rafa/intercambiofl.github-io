// travel-api.js
async function getTravelData() {
  try {
    const response = await fetch('https://travel-advisor.p.rapidapi.com/answers/v2/list?currency=USD&units=km&lang=en_US', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': API_KEYS.RAPIDAPI
      },
      body: JSON.stringify({
        contentType: "hotel",
        contentId: "4172546",
        questionId: "8393250",
        pagee: 0,
        updateToken: ""
      })
    });

    if (!response.ok) throw new Error('Erro na API');
    return await response.json();
  } catch (error) {
    console.error('Falha na requisição:', error);
    return null;
  }
}

// Uso
getTravelData().then(data => {
  if(data) console.log('Dados recebidos:', data);
});

// ========== Countdown Rússia ==========
function updateCountdown() {
    const targetDate = new Date('2025-06-01').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.querySelector('[data-days]').textContent = days;
    // ... cálculos para horas e minutos
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('countdown')) {
        setInterval(updateCountdown, 1000);
    }
});

// ========== Formspree ==========
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    // ... código de envio anterior
});
