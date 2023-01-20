/*
Operadores de Comparação

    > -> Maior que
    >= -> Maior que ou igual a
    < -> Menor que
    <= -> Menor que ou igual a
    == -> Igualdade (valor)  (Não é recomentado que use esse tipo)
    === -> Igualdade estrita (valor e tipo)
    != -> Diferente (valor)  (Não é recomentado que use esse tipo)
    !== -> Diferente estrito (valor e tipo)

    OBS: Essa comparação irá voltar um valor booleano

*/

// Diferença de valores estritos para normais:
let letra1 = '10';
let numero1 = 10;
let comparacao1 = letra1 == numero1;

console.log(comparacao1);

let letra2 = '10';
let numero2 = 10;
let comparacao2 = letra2 === numero2;

console.log(comparacao2);

let letra3 = '10';
let numero3 = 10;
let comparacao3 = letra3 != numero3;

console.log(comparacao3);

let letra4 = '10';
let numero4 = 10;
let comparacao4 = letra4 !== numero4;

console.log(comparacao4);