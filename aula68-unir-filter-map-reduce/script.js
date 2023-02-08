/*
Exercício: Retorne a soma do dobro de todos os pares;
    - Filtrar pares
    - Dobrar os valores
    - Somar tudo
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares1 = numeros.filter(function(valor) {
    return valor % 2 === 0;
}).map(function(valor) {
    return valor * 2;
}).reduce(function(acumulador, valor) {
    return acumulador + valor;
});

// Simplificando com arrow function:
const numerosPares2 = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador + valor);

// [ 50, 80, 2, 8, 22 ] Pares
// [ 100, 160, 4, 16, 44 ] Dobro
// 324 Valor total
console.log(numerosPares1);  
console.log(numerosPares2);  