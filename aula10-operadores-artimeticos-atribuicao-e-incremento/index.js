/* 
Operadores Aritiméticos:

    + -> Adição e Concatenação
    - -> Subtração
    / -> Divisão
    * -> Multiplicação
    ** -> Potenciação
    % -> Resto da divisão

Precedência dos operadores:
    () -> ** -> *, /, e % -> + e -
    - Da esquerda para direita

Incremento ou Decremente:
    ++ -> Irá aumentar a variável de 1 em 1
    -- -> Irá diminuir a variável de 1 em 1

Operadores de Atribuição:
    *= -> Mesma coisa que faz o incremento ou decremeto, porém agora irá multiplicar
    **= -> Mesma coisa que faz o incremento ou decremeto, porém agora irá fazer a potenciação

*/

// Exemplo de formas de incremetar um valor
let contador = 1;
contador = contador + 1
contador += 1
contador++
++contador
console.log(contador)

// Diferença entre colocar o o incrementador antes de depois:
contador = 1
console.log(contador++)  // Quando coloca ele depois não vai contar no console.log
console.log(contador)  // ele so vai contar apartir de quando sai dele, no caso aqui
console.log(++contador)  // Quando coloca ele antes ele já faz o incremeto
// OBS: As boas práticas indicam não fazer isso.

// Quando eu for fazer uma multiplicação com uma string ele irá voltar "NaN", diferente do python que irá me voltar o tanto de vez aquela string. Porém, se eu colocar um número dentro de uma string ele irá fazer a operação aritmética normalmente. EX:
let num1 = 5
let num2 = 'Bruno'
console.log(num1 * num2)

let num3 = 5
let num4 = '5.0'
console.log(num3 * num4)

// Se eu quiser converter um string que tem número para um inteiro ou float eu posso usar o "parseInt()", "parseFloat()" ou "Number()"(nesse ele irá entender se é um int ou float automaticaménte).
num4 = parseInt(num4)
console.log(num4, typeof num4)

let num5 = '15.5'
num5 = Number(num5)
console.log(num5, typeof num5)

