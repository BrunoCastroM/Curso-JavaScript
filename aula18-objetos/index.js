// Um objeto é criado por "{}", é parecido ao dicionário do python

const pessoa1 = {
    nome: 'Bruno',
    sobrenome: 'Castro',
    idade: 30
};

// Chamando um objeto:
console.log(pessoa1.sobrenome);


function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa2 = criaPessoa('João', 'Da Silva', 22);  // Quando eu envio um valor para função se argumento e na função é parâmetro
console.log(pessoa2);


// Eu posso simplificar o objeto assim, que o JS já vai identificar que a chave e o valor são os mesmos:
function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa3 = criaPessoa('Ricardo', 'Oliveira', 25);  // Quando eu envio um valor para função se argumento e na função é parâmetro
console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);  // Forma de chamar cada objeto dentro da função


// Dá para criar uma função(método) dentro de um objeto, e não precisa da palavra function para criá-la. Além disso você se refere ao objeto chamando o "this.nomeObjeto":
const pessoa4 = {
    nome: 'Jucelino',
    sobrenome: 'Martins',
    idade: 27,

    fala() {
        console.log(`Olá ${this.nome} ${this.nome}! você tem ${this.idade} anos.`);
    },
    incrementaIdade() {
        this.idade++;
    }
};

pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();