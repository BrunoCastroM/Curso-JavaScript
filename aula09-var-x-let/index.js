// Uma das difenrenças entre var e let é que no var é possivel sobrescrever a mesma variável(usando o nome de declaração "var"), já no let não. EX:
// OBS: Não crie variáveis com o var, ele ficou desatualizado
var nome1 = 'Bruno';
var nome1 = 'Castro';
console.log(nome1)

// Forma CORRETA de sobrescrever variáveis com let:
let nome2 = 'Amanda'
nome2 = 'Macêdo'
console.log(nome2)

// Forma ERRADA de sobrescrever variáveis com let:
// let nome3 = 'Amanda'
// let nome3 = 'Macêdo'

// console.log(nome2)


// ******************** Tipos de dados primitivos ********************
// String, number, undefined, null, boolean
const nome4 = 'Luiz'; // string
const nome5 = 'Luiz'; // string
const nome6 = 'Luiz'; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta pra local nenhuma na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhuma na memória
const aprovado = false; // Boolean = true, false (lógico)


let a = 2;
const b = a;
console.log(a, b); // 2, 2
a = 3;
console.log(a, b); // 3, 2