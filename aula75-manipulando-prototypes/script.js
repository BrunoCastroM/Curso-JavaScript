// Toda função construtora de objetos (new Object) tem um Object.prototype e dentro tem uma chave lá no navegador chamada "__proto__:". Essa lógica serve para as outras funções construtoras do JS.

const objA = {
    chaveA: 'A',

};

const objB = {
    chaveB: 'B',

};

const objC = {
    chaveC: 'C',

};

Object.setPrototypeOf(objB, objA);  // Aqui eu estou setando o prototype do "objB" para para ser o "objA". Nesse caso eu troquei o padrão "__proto__".
Object.setPrototypeOf(objC, objB);

console.log(objB.chaveA);  // Mesmo não tendo a "chaveA" no "objB" eu posso acessá-la pelor "objB", por conta do "Object.setPrototypeOf(objB, objA);"
console.log(objC.chaveA, objC.chaveB);  // Assim eu vou herdando valores do objeto

// OBS: Não é aconselhável o "objeto".__prot__. Se você quiser pegar ele use o "Object.getPrototypeOf(nome objeto);", ou seja, temos getter e setter no prototype.


// Exemplificando¹:
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
};

Produto.prototype.aumenta = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
};

const p1 = new Produto('Camiseta', 50);
p1.desconto(25);
console.log(p1);

// Fazendo de forma literal para acessar os métodos fora da função:
const p2 = {
    nome: 'Caderno',
    preco: 32
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumenta(10);
console.log(p2)


// Exemplificando²:
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100,
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 34,
    },
});
p3.preco = 100;
p3.aumenta(10)
console.log(p3);
