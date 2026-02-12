const botaoAdcionar=document.getElementById('btnAdicionar');
const camoTexto = document.getElementById('novoAprovados');
const lista = document.getElementById('listaAprovados');

botaoAdicionar.addEventListener('click', function(){
    const nome = campoTexto.value;

    if (nome.trim()!==""){
        const novoItem = document.createElement('li');
        novoItem.textContent
        lista.appendChild(novoItem);
        campoTexto.value="";
    }else{
        alert ("Por Favor, digite um nome!")
    }
})