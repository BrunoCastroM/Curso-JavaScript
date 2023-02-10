/*
Exemplo de Ecommerce: Venda de -> Camiseta, caneca, lápis
Para abstrair esse código eu devo ver o que os objetos tem em comum classificá-los em um único lugar. Exemplo: criando uma função "produto"
*/

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

// Como fazer a herança da função "Produto", para camiseta:
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor;
}
// Linkando os prototypies:
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
};

// Fazendo a herança com o produto Caneca:
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material;

    // Definindo as propriedades do parâmetro "estoque":
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor
        }

    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gen', 111);
// Criando uma instância da camiseta:
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
// Criando uma instância da caneca:
const caneca = new Caneca('Caneca Star Wars', 13, 'Plástico', 5);

camiseta.aumento(10);
caneca.estoque = 20;  // Usando o setter.

console.log(caneca);
console.log(caneca.estoque);  // Usando o getter.
console.log(camiseta);
console.log(produto);

