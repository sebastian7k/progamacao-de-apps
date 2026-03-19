document.getElementById('btnCalcular').addEventListener('click', function() {
    
    const inputQuantidade = document.getElementById('quantidade');
    const divResultado = document.getElementById('resultado');
    const boxValor = document.getElementById('boxValor');

    const quantidade = parseInt(inputQuantidade.value);

    if (inputQuantidade.value === '' || isNaN(quantidade) || quantidade < 0) {
        alert("Ops! Por favor, insira uma quantidade válida.");
        return;
    }

    
    let precoUnitario = 0;
    let total = 0;

    
    if (quantidade < 12) {
        precoUnitario = 1.30;
    } else {
        precoUnitario = 1.00;
    }

    total = quantidade * precoUnitario;
    
    
    const totalFormatado = total.toLocaleString('pt-BR', {
         style: 'currency', 
         currency: 'BRL' 
    });

    const precoUnitarioFormatado = precoUnitario.toLocaleString('pt-BR', { 
         style: 'currency',
         currency: 'BRL'
    });

    boxValor.innerHTML = `
        Comprando ${quantidade} maçãs a ${precoUnitarioFormatado} cada, o seu total é <span class="valor-destaque">${totalFormatado}</span>.
    `;
     
    
    divResultado.classList.remove('escondido');
});