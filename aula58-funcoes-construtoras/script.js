// Tanto as funções fábricas como as construtoras criam objetos. A única diferença é que a a fábrica ela retorna um objeto, na construtora ela já faz muita coisa automaticamente, além de não precisar de virgula e a única coisa que você precisa fazer é criar os objetos.
// OBS: Na função construtora você deve iniciar o nome com uma letra maiúscula (convenção), diferente do resto em JS e colocar a palavra "new" antes

function Pessoa(nome, sobrenome) {

    // Atributos privados(não podem ser acessados fora da função):
    const ID = 123456;  // Quando eu declaro uma variável dentro de uma uma função construtora eu não posso acessá-la sem o "this".
    const metodoInterno =  function() {

    };

// Quando eu utilizo a palavra "this" eu posso acessar ele de fora da função normalmente 
    this.nome = nome;
    this.sobrenome = sobrenome;
    // Ela não precisa do return porque ela já retorna os valores.

    this.metodo = function() {
        console.log(this.nome + ': Sou um método');
    }
}

const p1 = new Pessoa('Bruno', 'Castro');
const p2 = new Pessoa('José', 'Oliveira');

console.log(p1.nome, p2.nome);

p1.metodo();
p2.metodo();