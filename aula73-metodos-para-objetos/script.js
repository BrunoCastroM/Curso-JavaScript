/* 
Nós ja vimos:
Object.keys -> Retorna as chaves
Object.freeze -> Congela o objeto(protege de alteração)
Object.difineProperties -> Define várias propriedades de vários atributos
Object.difineProperty -> Define várias propriedades de um atributo
*/

// Copiando objetos com spread operator (...):
const produto1 = { nome: 'Caneta', preco: 1.9 };
const outraCoisa1 = { ...produto1, material: 'porcelanato' };  // Além de copiar ainda posso adcionar valores.
produto1.nome = 'Lápis'

console.log(produto1, outraCoisa1);

// Copiando objetos com Object.assing():
const produto2 = { nome: 'Lapiseira', preco: 2.0 };
const outraCoisa2 = Object.assign({}, produto2, {tipo: 'grafite'})  // Também posso adcionar valores
produto2.nome = 'Caderno'

console.log(produto2, outraCoisa2);


// Retornado as propriedades de uma chave com o Object.getOwnPropertyDescriptor():
const produto3 = { nome: 'Régua', preco: 2.3 };
Object.defineProperty(produto3, 'preco', {  // Definindo propriedades de uma chave
    writable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(produto3, 'nome'));
console.log(Object.getOwnPropertyDescriptor(produto3, 'preco'));


// Retornando os valores com Object.values() e Object.entries():
const produto4 = { nome: 'Caderno', preco: 24 };

console.log(Object.values(produto4));
console.log(Object.entries(produto4));  // Nesse ele divide em um array dentro de outro, para cada chave

// Fazendo um for com o entries():
for (let entry of Object.entries(produto4)) {
    console.log(entry);
}
// Posso fazer assim também para retornar só os valores(desetruturação):
for (let [chave, valor] of Object.entries(produto4)) {
    console.log(chave, valor);
}