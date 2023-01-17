let num1 = 1500
let num2 = 2.5764574

// Convertendo números para string:
console.log(num1.toString() + num2)
// OBS: se qualquer dos números for uma string ele irá concatenar com o outro número


// Representação binária de um número:
console.log(num1.toString(2))


// Transformando ou arredondando o número de casas decimais depois da vírgula:
console.log(num2.toFixed(3))


// Saber se o número é inteiro ou não:
let num3 = '15'
console.log(Number.isInteger(num3))
// OBS: Ele retorna false se for um float


// Saber se o número é uma conta inválida:
let num4 = 10 * 'Oi'
console.log(Number.isNaN(num4))
// OBS: Diferente do Python você não pode multiplicar um número com uma string, se não irá voltar NaN


// O Padrão de precisão de números em JS é o IEEE 754-2008 (tem uma certa imprecisão com os números decimais)
let num5 = 0.7
let num6 = 0.1
console.log(num5 + num6)
// Para resolver esse problema deve-se usar o "toFixed" junto com o "parseFloat" ou "Number".EX: Irei tentar incremetar a variável num5 até 1, e ele retornará um float.
num5 += num6
num5 += num6
num5 += num6
console.log(num5, Number.isInteger(num5))
// Resolvendo o problema¹:
num5 = Number(num5.toFixed(2))
console.log(num5, Number.isInteger(num5))
// // Posso também resolver desse jeito²:
// num5 = ((num5 * 100) + (num2 * 100)) / 100
// console.log(num5, Number.isInteger(num5))
// se eu passar ele já irá acusar false na verificação de inteiro:
num5 += num6
console.log(num5, Number.isInteger(num5))