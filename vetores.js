// vetores

const listaDeNomes = ["Marta", "José", "Maria",]

console.log("Exibindo todos os elementos: ")
console.log(listaDeNomes)

console.log("Exibindo o primiero elemento: ")
console.log(listaDeNomes[0])

console.log("Andionando um elemento: ")
listaDeNomes.push("Marília")
console.log(listaDeNomes)

console.log("Andionando um elemento: ")
listaDeNomes.push("Fred")
console.log(listaDeNomes)

console.log("Removendo um elemento")
listaDeNomes.splice(0,2)
console.log(listaDeNomes)

console.log("Removendo o segundo elemento da lista ")
listaDeNomes.splice(1, 1)
console.log(listaDeNomes)