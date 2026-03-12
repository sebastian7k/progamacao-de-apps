// exemplo com vetores de nomes
const listaDeNomes = ["Ana", "Maria", "Joana"]

const listaDeNumeros = [1, 2, 3, 4, 5]

//vetor de objetos com dados de nome e idade
//Um objeto carrega dados como uma classe 
const listaDeUsuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Maria", idade: 35},
    {nome: "Joana", idade: 45},
    {nome: "Andre", idade: 14}
]

// percorrendo e exibindo os elementos do vetor
// ForEach é uma função com laço de repetição
console.log("Exibindo todos os usuarios do vetor")
listaDeUsuarios.forEach( usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos`)
})


console.log("\nExibindo todos os usuarios do vetor")
for(let i = 0; i < listaDeUsuarios.length; i++ ){
    console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos.`)
}

console.log("\nFiltrando maiores de 18 anos.")
const maioridade = listaDeUsuarios.filter(usuario => usuario.idade >= 18)
maioridade.forEach(usuario => 
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
)


console.log("\nFiltrando menores de 18 anos.")
const menoridade = listaDeUsuarios.filter(usuario => usuario.idade < 18) 
menoridade.forEach(usuario => 
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
)


console.log("\nNa lista de numeros, filtre e mostre apenas numeros pares.")
const numerosPares = listaDeNumeros.filter(numero => numero % 2 === 0)
console.log(numerosPares) 


console.log("\nNa lista de nomes, mostre os nomes com forEach.")
listaDeNomes.forEach(nome => console.log(`Nome: ${nome}`))

console.log("\nNa lista de usuarios, mostre apenas os nomes.")
const nomes = listaDeUsuarios.map(u => u.nome)
nomes.forEach(nome => console.log(`Nome: ${nome}`))

console.log("\nNa lista de usuarios, encontre um usuario")
const usuarioEncontrado = listaDeUsuarios.find(u => u.nome === "Ana")
console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome} \nIdade: ${usuarioEncontrado.idade}`)

console.log("\nNa lista de usuarios encontre um usuario com idade de 45 anos");
const usuarioCom45 = listaDeUsuarios.find(usuario => usuario.idade === 45);
if (usuarioCom45) {
    console.log(`${usuarioCom45.nome} tem ${usuarioCom45.idade} anos.`);
}

console.log("\nNa lista de ususarios somando todas as idades:  ")
const somandoIdades = listaDeUsuarios.reduce((total,usuarios)=> total + usuarios.idade, 0)
console.log(somandoIdades)