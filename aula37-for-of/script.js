/*
O "for of" é específico para objetos iteráveis, ele serve para epgar somento o valor

Resumo:
    - For clássico -> Geralmente com iteráveis (arrays ou strings)
    - For in -> Retorna o índice ou chave (strigs, arrays ou objetos)
    - For of -> Retorna o valor em si (interáveis, arrays ou strings)

Obs: Todas as 3 maneiras podem ser feitas para arrays, agora para objetos eu não consgio fazer o "for of" e nem o for clássico para interar, já com o "for in" eu consigo
*/

const nomes = ['Bruno' , 'Castro'];

// for of (retorna o valor):
for (let valor of nomes) {
    console.log(valor);
}

for (valor of nomes) {
    console.log(valor);
}


// for i (retorna o índice e valor):
for (i in nomes) {
    console.log(nomes[i]);
}


// forEach:
// Mais um jeito de iterar em arrays, no caso com a função "forEach", que retorna os valores, os índices e o array inteiro.
nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
})


// Exemplo em objetos:
const pessoa = {
    nome: 'João',
    sobrenome: 'Ferreira'
}

for (chave in pessoa) {
    console.log(chave, pessoa[chave])
}
// Obs: Com o "for of" não funciona com objetos