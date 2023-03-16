
// Exportando uma classe:
module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }
    
    latir() {
        console.log(`${this.nome} latiu!`)
    }
}

// // Exportando uma função exemplificação:
// module.exports = function(x,y) {
//     return x * y;
// }