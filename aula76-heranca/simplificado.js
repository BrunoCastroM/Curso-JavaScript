function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
// Linkando a função "Camiseta()" com a "Produto()"
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.alterarNome = function (nome) {
    this.nome = nome;
};
Camiseta.prototype.alterarCor = function (cor) {
    this.cor = cor;
};



const camisa1 =  new Camiseta('Mandalorian', 76, 'Vermelha');
console.log(camisa1);
camisa1.aumento(25);
console.log(camisa1);
camisa1.alterarCor('Rosa');
console.log(camisa1);
camisa1.alterarNome('Break Bad');
console.log(camisa1);
