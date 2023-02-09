/* 
Getters e Setters: São maneiras de proteger a propriedade da função
*/
// Na constructor function:
function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        // Obetendo o valor com o getter: Ele vai servir para pegar o seu valor e mostrar na tela
        get: function() {
            return estoque;
        },
        // Setando o valor com o setter:
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Não é um numero')
            }
            estoquePrivado = valor;
        }
    });
}

// Na factory function:
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor
        }
    };
}

const p1 = new Produto('Camisa', 20, 3)
// console.log(p1);
p1.estoque = 5
// ver o valor do getter:
console.log(p1.estoque)

const p2 = criaProduto('Blusa');
p2.nome = 'Mudando o valor do nome'
console.log(p2.nome)