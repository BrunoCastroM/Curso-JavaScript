// // Importando um módulo:
// const mode1 = require('./mode1');


// // Chamando o módulo:
// console.log(mode1);
// console.log(mode1.falaNome());  // Aqui vai aparecer o valor dentro da váriável mais undefined, pois eu estou usando o console.log() duas vezes


// // Importando um módulo específico:
// const falaNome = require('./mode1').falaNome;
// console.log(falaNome());


// // Especificando o que eu estou importando:
// const {nome, outroNome, falaNome} = require('./mode1');
// console.log(nome, outroNome, falaNome())


// Chamando a classe:
const { Pessoa } = require('./mode1');
const p1 = new Pessoa('Juvenal');
console.log(p1);