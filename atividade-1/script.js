
document.getElementById('btnCalcular').addEventListener('click', function() {
    
    
    const valor1 = document.getElementById('numero1').value;
    const valor2 = document.getElementById('numero2').value;
    const divResultados = document.getElementById('resultados');

    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    
    if (valor1 === '' || valor2 === '' || isNaN(num1) || isNaN(num2)) {
        alert("Ops! Por favor, preencha os dois campos com números válidos.");
        return;
    }

   
    const soma = num1 + num2;
    const media = soma / 2;
    const produto = num1 * num2;
    const maior = Math.max(num1, num2);
    const menor = Math.min(num1, num2);

    
    divResultados.classList.remove('escondido');

    divResultados.innerHTML = `
        <div class="linha-resultado">Média: <span>${media}</span></div>
        <div class="linha-resultado">Soma: <span>${soma}</span></div>
        <div class="linha-resultado">Produto: <span>${produto}</span></div>
        <div class="linha-resultado">Maior número: <span>${maior}</span></div>
        <div class="linha-resultado">Menor número: <span>${menor}</span></div>
    `;
});