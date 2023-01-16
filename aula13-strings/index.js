let umaString = "Um \"texto\" qualquer"; // Se você quiser escapar as aspas duplas mesmo colocando elas no começo você pode usar duas "\"

console.log(umaString);

// Índices:
console.log(umaString[4]); // Strings são indexáveis, ou seja, cada caractere é contado em um índice. Para qualquer range que busquemos foramd dele o JS irá retornar undefined
console.log(umaString.charAt(1)); // Posso fazer a mesma coisa usando a função "carAt()", se for fora do range ele não retorna nada
console.log(umaString.indexOf('texto'));  // Verifica em qual índice começa a palavra que eu colocar
console.log(umaString.indexOf('o', 3));  // Verifica em qual índice tem a palavra "o" depois do índice 3
console.log(umaString.lastIndexOf('e'));  // Verifica em qual índice tem a palavra "e" começando a busca de trás para frente
console.log(umaString.lastIndexOf('m', 7));  // posso colocar a posição também. Lembrando que ele começa de trás para frente, ou seja do índice 7 para o 0


// Concatenar(mesma função do "+"):
console.log(umaString.concat(' em',' qualquer', ' lugar'));
// OBS: A maneira mais fácil de fazer isso é com template strings.EX:
console.log(`${umaString} outra coisa.`);


// Expressões regulares (match, search e replace):
console.log(umaString.match(/[a-z]/g));  // Com a flag "g" ele retorna todas as letras minúsculas dentro da string
console.log(umaString.search(/[x]/));  // Faz a busca do que eu colocar como valor dentro dos "[]"
console.log(umaString.replace('Um', 'Dois'));  // Faz a substituição de uma palavra para outra


// Atributo da string (length, slice, substring, splite, toUpperCase, toLowerCase):
console.log(umaString.length);  // Assim eu posso ver o tamano da string
console.log(umaString.slice(2, 8));  // Assim eu posso ver o tamano da string. Lembrar que ele vai até o indice anterior, nesse caso ele só irá pegar até a letra do índice 7
console.log(umaString.slice(-3));  // Aquele ele pega a string de trás para frente
console.log(umaString.slice(-3, -1));  // Nesse caso estou fazendo um intervalo
console.log(umaString.substring(umaString.length - 3, umaString.length - 1));  // faz a mesma coisa do slice (seria melhor usar o slice)
console.log(umaString.split(' '));  // Nesse caso irei dividir todas as palavras que contenha espaços entre elas e irá voltar como um array
console.log(umaString.split('x'));
console.log(umaString.split(' ', 2));  // Posso colocar quantos resultados eu irei querer
console.log(umaString.toLocaleUpperCase());  // Transforma todas as letras em maiúsculas
console.log(umaString.toLocaleLowerCase());  // Transforma todas as letras em minúsculas