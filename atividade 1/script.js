function gerarTabuada() {
    // 1. Obtendo o número do input (ajustado para o ID correto do HTML)
    const numeroInput = document.getElementById('numberInput');
    
    // 2. Corrigido para 'parseInt' (converte o valor digitado para número inteiro)
    let numero = parseInt(numeroInput.value);

    // 3. Elemento do HTML onde o resultado será exibido (ajustado para o ID do HTML)
    const resultadoDiv = document.getElementById("resultadoTabuado");
    resultadoDiv.innerHTML = ""; // Limpa a tela para a nova tabuada

    // 4. Verifica se a entrada não é um número (isNaN = is Not a Number)
    if (isNaN(numero)) {
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido.</p>";
        return; // O 'return' faz a função parar aqui se der erro
    }

    // 5. Adicionar título para a tabuada
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`;

    // 6. Laço de repetição para gerar a tabuada (Corrigido o 'o' para 'i')
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i; 
        resultadoDiv.innerHTML += `<p> ${numero} x ${i} = ${resultado}</p>`;
    }
}

// 7. Pegar o botão e escutar o clique (Ajustado para o ID 'Gerarbtn')
const botaoGerar = document.getElementById("Gerarbtn");
botaoGerar.addEventListener("click", gerarTabuada);