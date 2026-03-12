const listaDeAluanos = [
    {nome:"Ana",  nota: 5.0 },
    {nome:"Bruno",  nota: 10.0 },
    {nome:"Carla",  nota: 2.0 },
    {nome:"Andrea", nota: 7.0 },
    {nome:"Marta",  nota:6.0 }
]

console.log("Encontre a aluna marta e mostre o nome e a media dela")

const marta = listaDeAluanos.find(aluno => aluno.nome === "Marta")

console.log(`${marta.nome} tem nota ${marta.nota}`)

console.log("Mostre a media geral da turma.")

const somaNotas = listaDeAluanos.reduce((soma, aluno) => soma + aluno.nota, 0)

const media = somaNotas / listaDeAluanos.length

console.log("Média da turma:", media)

console.log("Mostre o nome e a nota dos alunos com nota abaixo de 7.0")

const abaixoDeSete = listaDeAluanos.filter(aluno => aluno.nota < 7)

abaixoDeSete.forEach(aluno => {
    console.log(`${aluno.nome} - ${aluno.nota}`)
})

console.log("Mostre apenas o nome dos alunos")

const nomes = listaDeAluanos.map(aluno => aluno.nome)

console.log(nomes)