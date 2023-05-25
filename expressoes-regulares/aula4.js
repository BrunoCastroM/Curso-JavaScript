/*
Greedy e non-greedy(lazy)
*/

const { html } = require('./base')

console.log(html.match(/<.+>.+<\/.+>/g))  // Aqui temos um comportamento greedy, ou seja, ele seleciona do começo até o final

console.log(html.match(/<.+?>.+?<\/.+?>/g))  // Aqui temos um comportamento non-greedy, aqui e;e vai fechar a busca em cada vez que fechar a tag

// Exemplo de como pegar cada tag:
const tagsSeparadas = html.match(/<.+?>.+?<\/.+?>/g)
console.log(tagsSeparadas[0])
console.log(tagsSeparadas[1])
console.log(tagsSeparadas[2])