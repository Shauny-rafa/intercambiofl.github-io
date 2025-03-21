// Dados de exemplo (substitua por dados reais coletados de um site de viagens)
const expenses = {
    economy: 100, // Custo diário em dólares
    medium: 200,
    luxury: 300,
};

// Calculadora de Gastos
document.getElementById('expenseForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const duration = parseInt(document.getElementById('duration').value);
    const tripType = document.getElementById('tripType').value;
    const total = duration * expenses[tripType];
    document.getElementById('result').innerText = `Custo estimado: $${total}`;
});

// Área com DeepSeek (simulação)
function askDeepSeek() {
    const question = document.getElementById('question').value;
    const answer = `DeepSeek: Para "${question}", o custo estimado é $${Math.floor(Math.random() * 5000)}.`;
    document.getElementById('answer').innerText = answer;
}
