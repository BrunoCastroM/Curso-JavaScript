const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Castro'
};

/* 
Eu posso criar um array desse jeito também: 
    const pessoa1 = new Object();
    pessoa1.nome = 'João';
    pessoa1.sobrenome = 'Silveira';
    console.log(pessoa1.nome);

*/

const chave = 'nome'

// Formas de acessar chaves:
console.log(pessoa.nome);
console.log(pessoa['sobrenome']);
console.log(pessoa[chave]);
// OBS: na notação de ponto eu só consigo acessar pelo nome da chave, porém na notação de colchetes eu consigo acessar a chave através de outra variável por exemplo.


// Adicionando mais valores ao objeto:
pessoa.idade = 30;


// Apagando chaves:
delete pessoa.sobrenome;
console.log(pessoa);


// Acessando objetos dentro de uma função:
pessoa.falaNome = function() {
    console.log(`${this.nome} está falando seu nome`);
}

pessoa.pegarDataDeNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

pessoa.falaNome();
console.log(pessoa.pegarDataDeNascimento());


// Iterando sobre as chaves e valores dentro do objeto:
for (let chave in pessoa) {
    console.log(chave);
    console.log(pessoa[chave]);
}


// Padrões de objetos para projetos: Factory Function, Constructor Function e Class. Você pode escolher uma das três que você achou melhor.
// Factory Function:
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Roberto', 'Figueira');
console.log(p1.nomeCompleto());

// Constructor Function (diferente do restos ela usa letra maiúscula no início):
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);  // Eu posso usar o "Object.freeze(this)" para que os valores criados dentro da função não sejam alterados. Isso funciona em arrays também.
}

const p2 = new Pessoa('Argélia', 'Santos');  // O "new" vai criar um objeto vazio atrelando a palavra "this" a esse objeto
Object.freeze(p2);  // Se eu quiser que objeto não seja alterado eu posso colocar a função "Object.freeze(parâmetro do objeto)"
p2.nome = 'Nãovai mudar por conta do freeze'
console.log(p2)
