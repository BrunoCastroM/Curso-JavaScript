// Portotypes são a base para a aprender a POO:
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'Original: ' + this.nome + '' + this.sobrenome;  // O JS primeiro vai tentar encontra o membro do próprio objeto da cadeia de protótipos, depois ele vai tentar encontrar o de baixo. Seria melhor usar o de baixo pois as vezes você quer que uma parte do seu código não seja executada toda vez(para evitar problema des performace), as vezes você quer para uma coisa específica. Ai toda vez que eu precisar dessa de baixo ela só vai ser executada somente a vez que necessitar.
    // Ordem onde o JS vai procurar: Na instância -> função -> objeto
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + '' + this.sobrenome;
};

const pessoa1 = new Pessoa('Bruno', 'C.');
const pessoa2 = new Pessoa('Roberto', 'O.');
const data = new Date();

console.log(pessoa1);
console.log(pessoa2);
console.log(data);