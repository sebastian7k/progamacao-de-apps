document.getElementById('btnCalcular').addEventListener('click', function() {
const nota1 = parseFloat(document.getElementById('nota1').value);
const nota2 = parseFloat(document.getElementById('nota2').value);
const nota3 = parseFloat(document.getElementById('nota3').value);
const divResultados = document.getElementById('resultados');

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    alert("Ops! Por favor, preencha os três campos com números válidos.");
    return;
}
const media = (nota1 + nota2 + nota3) / 3;

let status = '';
let classeCor = '';

if (media >= 7) {
    status = 'Aprovado';
    classeCor = 'verde';
} else if (media >= 5) { 
    status = 'Em Recuperação';
    classeCor = 'amarelo';
} else {
    status = 'Reprovado';
    classeCor = 'vermelho';
}
divResultados.classList.remove('escondido');
divResultados.innerHTML = `
    <div class="linha-resultado">Média: <span>${media.toFixed(2)}</span></div>
    <div class="linha-resultado">Status: <span class="${classeCor}">${status}</span></div>
`;
}   );