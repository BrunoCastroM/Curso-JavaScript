// As expressões regulares servem como padrão para encontar e manipular coisas dentro de uma string

/*
Flags:
    g - global (encontra todas as ocorrências)
    i - insesitive (case insensitive, ou seja, não importa se for maiúscula ou minúscula)
    () - groups
    | ou
*/

const { texto } = require('./base')

const regExp1 = /o café tá prontinho/;
const regExp2 = /(o café )(tá prontinho)/;  // Posso pega trechos do texto para verificar se existe
const found = regExp2.exec(texto)
const regExp3 = /(Maria|Fernando)(, hoje sua esposa,)/i;

console.log(regExp1.test(texto))
console.log(regExp1.exec(texto))
console.log(found[0])
console.log(found[1])
console.log(found[2])

console.log(regExp3.exec(texto))
