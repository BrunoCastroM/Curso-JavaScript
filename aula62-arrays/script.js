const nomes1 = ['Bruno', 'Maria', 'João', 'Pedro', 'Lucas'];
nomes1[2] = 'Roberta';
console.log(nomes1);


// Deletando valor sem deletar o índice:
delete nomes1[1];
console.log(nomes1);


// Outra forma de criar um array (não tão utilizada):
const nomes2 = new Array('Maurício', 'Julia', 'Geovani');
console.log(nomes2);


// Tudo que eu fizer de alterações na variável "novo" e na "nomes2" vão ser alterados nas duas. Eu posso evitar isso usando o "spread" para não alterar as duas de uma vez. Ex: const novo = [...nomes2];
const novo1 = nomes2;
novo1.pop();
console.log(novo1, nomes2);


// Fatiando o array (slice):
const nomes3 = ['José', 'Eduarda', 'Felipe', 'Geovana', 'Ostrogildo']
const novo2 = nomes3.slice(0, 3);  // slice(índice incial, índice final). Lembrando que o índice final não é contado
const novo3 = nomes3.slice(0, -1);  // tirando o o último nome
console.log(novo2, novo3);


// Jogando strings em um array (split):
const nome1 = 'Bruno Castro de Moura';
const arrayDoNome = nome1.split(' ');  // Aqui eu coloco o valor que quando ele achar ele vai separar
console.log(arrayDoNome);

// Jutando arrays em uma string (join):
const nome2 = ['Bruno', 'Castro', 'de', 'Moura'];
const strigDoNome = nome2.join(' ');
console.log(strigDoNome);
