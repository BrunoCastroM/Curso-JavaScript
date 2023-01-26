let a = 'a';
let b = 'b';
let c = 'c';
const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);


// A atribuição via desestruturação serve para ajudar a criar uma variável de cada elemento sem precisar fazer uma para cada
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiNumero, segundoNumero, ...restoDoArray] = numeros;  // Aqui vai atribuindo os índices dentro de cada variável que eu indiquei. Os "..." serve para atribuir o resto dos valores do array dentro de uma só váriável
console.log(primeiNumero, segundoNumero, restoDoArray);


const [um, , tres, , cinco] = numeros;  // Se eu quiser pular um índice do array  é só fazer dessa forma

console.log(um, tres, cinco);

const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [,[,,seis]] = numeros2

console.log(numeros2[1][2]);
console.log(seis);