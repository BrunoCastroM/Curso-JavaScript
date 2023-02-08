// A função map vai alterar valores do array, diferente do que faz a filter. Tudo que foi falando em filter funciona da mesma forma com o map
// OBS: O map sempre vai ter o valor original do array (número de elementos)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Exercício: Dobre o valor dos números
const dobraNumeros1 = numeros.map(function (valor) {
    return 2 * valor;
});
console.log(dobraNumeros1);

// Simplificando:
const dobraNumeros2 = numeros.map(valor => 2 * valor);
console.log(dobraNumeros2);


// Exercício: Para cada elemento: Retone apenas uma string com o nome da pessoa. Remova apenas a chave "nome" do objeto. Adcione uma chave id em cada objeto.
const pessoas = [
    {nome: 'Bruno', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
    {nome: 'Edu', idade: 20},
];

const nomes = pessoas.map(objeto => objeto.nome);
const idades = pessoas.map(function(objeto) {  // Se eu quiser não alterar o objeto original em sua forma eu posso fazer uma cópia dele com o spread "..."
    const deletarNome = {...objeto}  // Criando a cópia do objeto
    delete deletarNome.nome;  // Deletando a chave "nome" dá cópia
    return deletarNome;
});
/*
Outra forma de fazer isso:
    const idades = pessoas.map(objeto => ({idade:objeto.idade}));
*/
const comIds = pessoas.map(function(objeto, indice) {
    objeto.id = indice + 1;
    return objeto
});

console.log(nomes);
console.log(idades);
console.log(comIds);