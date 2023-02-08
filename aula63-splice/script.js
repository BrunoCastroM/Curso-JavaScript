// Método splice -> Essa função faz o que o "pop()", "push()", "unshift()" e o "shift()" faz e um pouco mais.

const nomes = ['José', 'Eduarda', 'Felipe', 'Geovana', 'Ostrogildo'];

// Exemplo: nomes.splice(índice que quer adicionar, número elemento à remover, elementos que quer adcionar).


// Removendo itens:
const removidos1 = nomes.splice(4, 1);  // Eu posso criar uma variável para guardar o valor removido dentro de um array.
console.log(nomes, removidos1);

const removidos2 = nomes.splice(-1, 1); // utilizando índice negativo.
console.log(nomes, removidos2);


// Adcionando itens:
const adicionar1 = nomes.splice(2, 0, 'Bruno');
console.log(nomes);
// Adcionando mais de 1 item:
const adicionar2 = nomes.splice(2, 0, 'Bruno', 'Ricardo');
console.log(nomes);
// Adcionando elemento no final do array:
const adicionar3 = nomes.splice(nomes.length, 0, 'Leurenço');
console.log(nomes);


// Substituindo o item:
const adicionar5 = nomes.splice(3, 1, 'Juliano');
console.log(nomes, adicionar5);