document.getElementById('filterButton').addEventListener('click', () => {
    const searchTerm = document.getElementById('search').value;
    // Dados simulados (substitua por dados reais depois)
    const data = [
        { destino: 'Rússia', preco: 'Mais procurados: R$ 2.363; Férias em família: R$ 2.165; Férias românticas: R$ 3.134; Férias de luxo: R$ 3.283; Férias de baixo custo: R$ 2.015.' },
    ];

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = data
        .filter(item => item.destino.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(item => `
            <div class="item">
                <h3>${item.destino}</h3>
                <p>Preço: ${item.preco}</p>
            </div>
        `).join('');
});
