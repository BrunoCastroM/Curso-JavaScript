/*
Resumo:
    - filter -> filtrar o array
    - map -> modificar os elementos do array
    - reduce -> reduzir os elementos do array a um único elemento
*/

// Função reduce: serve para diminuir o array para um elemento.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Diferente do filter e do map que os 3 parâmetros da função de callback são valor, índice e array. O map usa acumulador, valor, índice e array.
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador
}, 0); // Esse "0" é o número inicial que você quer que comece o acumulador

console.log(total)




// Exercício: Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Bruno', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 83 },
    { nome: 'Wallace', idade: 47 },
    { nome: 'Edu', idade: 20 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);