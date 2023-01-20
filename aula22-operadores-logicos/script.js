/*
Operadores Lógicos:

    && -> and  (Todas as expressões precisa ser verdaderas para retorna true)
    || -> or  (Apenas uma expressão precisa ser verdaderas para retorna true)
    ! -> not  (Troca o valor booleano)

*/

// AND:
console.log(true && true);
console.log(true && false)
// OR:
console.log(true || false);
console.log(false || false);
// NOT:
console.log(!false && !false);
console.log(!false || false);

// Exemplo:
const usuario = 'Bruno';
const senha = 123456;
const vaiLogar = usuario === 'Bruno' && senha === 123456;

console.log(`Usuário vai logar?: ${vaiLogar}`)