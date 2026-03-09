// novos recursos ES6

//VETOR DE NUMEROS

// novos recursos ES6

// VETOR DE NUMEROS
const listaDeNumeros = [1, 2, 3, 4, 5];

console.log("exibindo numeros do vetor:")
console.log(listaDeNumeros)

console.log("\nMultiplicando números do vetor:")
const dobrados = listaDeNumeros.map(n => n * 2)
console.log(dobrados)

// Filtrar números pares
const pares = listaDeNumeros.filter(n => n % 2 === 0);
console.log("\nNúmeros pares:");
console.log(pares);

// Filtrar números ímpares
const impares = listaDeNumeros.filter(n => n % 2 !== 0);
console.log("\nNúmeros ímpares:");
console.log(impares);

//somando  todos os numeros 


console.log("\nSomando todos os números do vetor:  ")
const soma = listaDeNumeros.reduce ((soma, atual)=> soma + atual, 0)
console.log(soma)