// Exercicio. 

// Crie um vetor com o nome de seus familiares  
// Com seis nomes.

//use todos os comandos vistos em vetores


const listaDeNomes = ["Suzane von richthofen", "Champinha", "Marcola"]
console.log("Exibindo todos os elementos: ")
console.log(listaDeNomes)

console.log("Exibindo o primiero elemento: ")
console.log(listaDeNomes[0])

console.log("Andionando um elemento: ")
listaDeNomes.push("Fernandinho Beira-Mar")
console.log(listaDeNomes)

console.log("Andionando um elemento: ")
listaDeNomes.push("Lula")
console.log(listaDeNomes)

console.log("Andionando um elemento: ")
listaDeNomes.push("Nikolas")
console.log(listaDeNomes)

console.log("Removendo um elemento")
listaDeNomes.splice(0,2)
console.log(listaDeNomes)

console.log("Removendo o segundo elemento da lista ")
listaDeNomes.splice(4, 4)
console.log(listaDeNomes)