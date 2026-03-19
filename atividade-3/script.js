document.getElementById('verificar').addEventListener('click', function() {
    const idadeInput = document.getElementById('idade');
    const divResultado = document.getElementById('resultado');
    const boxStatus = document.getElementById('boxStatus');

    
    const idade = parseInt(idadeInput.value);

    
    if (idadeInput.value === '' || isNaN(idade) || idade < 0) {
        alert("Ops! Por favor, insira uma idade válida.");
        return;
    }

    let mensagem = "";
    let classeCor = "";

    if (idade < 16) {
        mensagem = "Você não pode votar.";
        classeCor = "vermelho";
    } else if (idade >= 16 && idade < 18) {
        mensagem = "Você pode votar, mas não é obrigatório.";
        classeCor = "amarelo";
    
    } else if (idade > 65) {
        mensagem = "Você pode votar, mas não é obrigatório.";
        classeCor = "amarelo";
    } else {
        mensagem = "Você pode votar e é obrigatório.";
        classeCor = "verde";
    }

    boxStatus.classList.remove('vermelho', 'amarelo', 'verde');
    boxStatus.innerText = mensagem;
    boxStatus.classList.add(classeCor);

    divResultado.classList.remove('escondido');
});