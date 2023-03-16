const nome = 'Bruno';
const sobrenome = 'Castro';

const falaNome = () => {
    return nome + ' ' + sobrenome;
};

// Forma de exportar módulo
/*
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

console.log(module.exports);
*/

// Outra forma de fazer exports:
exports.nome = nome;
exports.outroNome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'o this server também para exportar, mas não ;é tão usando'

console.log(module.exports);
// Obs: A variável não precisa ser o mesmo nome da chave


// Exemplificando com uma classe:
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa