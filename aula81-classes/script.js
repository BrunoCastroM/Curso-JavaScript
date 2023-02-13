// Classes em JS são a mesma coisa do que a função construtora. É só um modo diferente de escrever, porém ela faz a mesma coisa da função construtora.
// Obs: Se eu quiser colocar parâmetros dentro da classe eu uso o método constructor
class Pessoa1 {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Criando métodos dentro da classe
    // OBS: Tem uma vantagem sobre a outra forma que eu não preciso criar um prototype, atrelar ele a um método, o JS já faz tudo isso automaticamente.
    falar() {
        console.log(`${this.nome} esta falando.`)
    }

    comer() {
        console.log(`${this.nome} esta comendo.`)
    }

    beber() {
        console.log(`${this.nome} esta bebendo.`)
    }
}

const p1 = new Pessoa1('Bruno', 'Castro');
console.log(p1)


// Comparando com a função construtora:
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
}

Pessoa2.prototype.comer = function() {
    console.log(`${this.nome} está comendo.`)
}

Pessoa2.prototype.beber = function() {
    console.log(`${this.nome} está bebendo.`)
}

const p2 = new Pessoa2('Luciano', 'Cavalcante')
console.log(p2)