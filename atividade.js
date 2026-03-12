const listaDeAluanos = [
    {nome:"Ana",  nota: 5.0 },
    {nome:"Bruno",  nota: 10.0 },
    {nome:"Carla",  nota: 2.0 },
    {nome:"Andrea", nota: 7.0 },
    {nome:"Marta",  nota:6.0 }
]

console.log("Encontre a aluna marta e mostre o nome e a media dela")
const nmarta = listaDeAluanos.find(aluno => aluno.nome === "Marta");
console.log(`${marta.nome} tem nota ${marta.nota}`)

console.log("Mostre a media geral da turma. ")

console.log("Mostre o nome e a nota dos alunos com nota abaixo de 7.0")

console.log("Mostre apenas o nome dos alnos com nota maior ou menor que 7.0")
