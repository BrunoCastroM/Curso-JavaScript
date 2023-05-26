/* 
Conjuntos:
    [] -> Serve para encontrar qualquer coisa que estiver dentro dos colchetes

Ranges
    [0-9] -> É o traço dentro dos colchetes, nesse exemplo seria de 0-9. Sempre é o [min-max]

*/

const { alfabeto } = require('./base')


console.log(alfabeto.match(/[abc]/g))
console.log(alfabeto.match(/[abc123]+/g))
console.log(alfabeto.match(/[^abc123]+/g))  // Negação: Encontrar tudo menos o que eu coloquei "^"
console.log(alfabeto.match(/[0-9]/g))
console.log(alfabeto.match(/[a-z]+/g))  // Traz toda a sequencia com o +
console.log(alfabeto.match(/[a-zA-Z0-9]+/g))
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g))
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g))  // Unicode
console.log(alfabeto.match(/\w+/g))  // Atalho para o a-z 0-9 A-Z
console.log(alfabeto.match(/\W+/g))  // Atalho para negação do de cima
console.log(alfabeto.match(/\d+/g))  // Atalho para o de 0-9
console.log(alfabeto.match(/\D+/g))  // Atalho para negação do de cima
console.log(alfabeto.match(/\s+/g))  // Encontrar 1 ou mais espaços na string
console.log(alfabeto.match(/\S+/g))  // Negação do de cima

// Obs: Sem o "+" ele vai trazer item por item