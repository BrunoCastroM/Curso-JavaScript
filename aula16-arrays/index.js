// Arrays são como as listas do python, só precisa usar os [] para defini-las.

const alunos = ['Bruno', 'Felipe', 'Amanda'];
console.log(alunos);


// Acessando índices:
console.log(alunos[1]);


// Editando elementos do array:
alunos [0] = 'Ricardo';
console.log(alunos);


// Adicionando elementos no array:
alunos [3] = 'João';
console.log(alunos);

alunos[alunos.length] = 'Luiza';  // Aqui irá adicionar um elemento no último índice
console.log(alunos);

alunos.push('Geovani');  // Outra forma de adicionar um elemento no último índice
console.log(alunos);

alunos.unshift('Roberta');  // Adicionando elemento no primeiro íncice
console.log(alunos);


// Removendo elementos do array:
alunos.pop();  // Remove o último elemento do array
console.log(alunos);

delete alunos[1];  // Remove um elemento específico do array, nesse caso irá aparecer um elemento vazio no elemento deletado, ou seja, ele não renumera os índices
console.log(alunos);


// Buscando elementos que não existem no array:
console.log(alunos[50]);  // Nesse caso ele irá retornar o valor undefined


// Fatiando arrays:
console.log(alunos.slice(0, 10));  // Eu posso passar do número final que ele irá voltar o dado sem erros
console.log(alunos.slice(0, -2));  // Aqui eu vou pegar todos os elementos do array menos os dois últimos


// Verificando se está trabalhando com array:
console.log( alunos instanceof Array);  // Ele irá voltar um booleano


// OBS: Quando usamos "const" para aplicar uma variável que contenha valores mutáveis (arrays e objetos) é possivel mudar os valores contidos dentro dessa variável const, coisa que não acontece quando você coloca com valores imutáveis (os tipos primitivos são dados imutáveis. Ex: number, string, boolean, undefined, null, symbol e bigint)

// Isso pode:
const list = [1, 2, 3, 4, 5];
list.pop();
list[0] = 1024;
console.log(list);
 
// // Isso NÃO pode:
// const array = [1, 2, 3, 4, 5];
// array = 'Legal'; // Assignment to constant variable.
