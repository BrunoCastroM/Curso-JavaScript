// Filter, filtra elementos de um array. E sempre retornar um array com a mesma quantidade de elementos ou menos:


// Exercício retorne os números maiores que 10:
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosMaiores10 = [];
for (i in numeros) {
    if (numeros[i] > 10) {
        numerosMaiores10.push(numeros[i]);
    }
}
console.log(numerosMaiores10);

// Outra forma de fazer(com o filter)¹:
function callBackFilter(valor) {  // Essa função de callback já recebe automáticamente 3 valores (valor, índice, e array). É como se fosse um for para percorrer o array
    return valor > 10;  // Quando eu quero que ele retorne o valor booleano treu ou fasle, em vez de fazer um if ou else para isso eu já posso pegar o valor e colocar ele para retornar com a condição.
}
const numerosFiltrados1 = numeros.filter(callBackFilter);
console.log(numerosFiltrados1);

// Outra forma de fazer(com o filter)², fazendo com arrow function:
const numerosFiltrados2 = numeros.filter(valor => {
    return valor > 10;
});
console.log(numerosFiltrados2);

// Outra forma de fazer(com o filter)², fazendo com arrow function(simplificando ainda mais):
const numerosFiltrados3 = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados3);

// VErificando todos os parâmetros do filter:
const numerosFiltrados4 = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array);
});


// Exercício: Retorne as poessoas que tem nome com 5 letras ou mais. Retorne as pessoas com mais de 50 anos. Retorne as pessoas cujo nome termina com "a".
const pessoas = [
    {nome: 'Bruno', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
    {nome: 'Edu', idade: 20},
];

const pessoaComNomeGrande = pessoas.filter(objeto => objeto.nome.length >= 5);
const pessoa50AnosMais = pessoas.filter(objeto => objeto.idade > 50);
const pessoaTerminaNomeA = pessoas.filter(objeto => {
    return objeto.nome.toLowerCase().endsWith('a');
});

console.log(pessoaComNomeGrande);
console.log(pessoa50AnosMais);
console.log(pessoaTerminaNomeA);
