/* Valores primitivos(imutáveis) -> string, number, boolean, undefined, null (bigint, symbol). São valores copiados, ou seja, nenhum dado irá depender de outro */
// Exemplo de dado imutável:
let nome = 'Luiz';
nome[0] = 'R';
console.log(nome);  // Percebe-se que ele não mudou a letra "L" pelo "R"

nome = 'Bruno';  // O meu dado só irá mudar se eu mudar ele inteiramente
console.log(nome);

// Criando uma cópia do dado
let a = 'A';
let b = a;
console.log(a, b);

a = 'Outra coisa'
console.log(a, b);


/* Valores por referência(mutável) -> array, object, function. São valores passado por referência, ou seja, um dado irá depender do outro */
let c = [1, 2, 3];
let d = c;
console.log(c, d);  // Como são dados por referência eles apontam para o mesmo dado na memória, tanto o "c", quanto o "d".
// Se eu alterar qualquer uma das variáveis ele irá trocar as duas. Ex:
d.push(4);
console.log(c, d);

d.pop();
console.log(c, d);

// Se eu quiser copiar um valor de refência, em vez de deixar apontar para o mesmo valor na memória eu posso fazer isso. Ex:
let e = [...d];  // Ai nesse caso a variável "e" não vai aportar para a mesma memória da variável "d".
e.push(10);
console.log(c, d, e);