// Factory function (função fábrica) e Constructor function (função construtora):

//OBS: Métodos são funções dentro de outra função
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter:
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');

        },
        fala: function (assunto='valor padrão') {
            return `${nome} está ${assunto} e tem ${this.peso}kg`; // Para acessar um parâmetro que está fora do escopo de um ou mais métodos você coloca a função "this" dentro. No exemplo eu acessei o a chave "peso" fora do escopo da função. OBS: Ele vai se referir ao objeto que está chamando ele
        },
        altura: altura,
        peso: peso,

        imc() {  // Posso criar um método dessa forma também.
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        // Getter (só obter o valor):
        get multiplicar() {  // Se eu colocar o "get" o método da classe agir como um atributo da classe.
            const indice = this.peso * this.altura;
            return indice.toFixed(2);
        }

    };
}

const pessoa1 = criaPessoa('Bruno', 'Castro', 1.80, 77);
const pessoa2 = criaPessoa('João', 'Silveira', 1.90, 86);
console.log(pessoa1.imc());
console.log(pessoa2.imc());

console.log(pessoa1.fala('falando sobre JS'));
console.log(pessoa2.fala('falando sobre JS'));

console.log(pessoa1.multiplicar);  // E para acessar atributos é assim.
console.log(pessoa2.multiplicar);

console.log(pessoa1.nomeCompleto);
console.log(pessoa2.nomeCompleto);

pessoa1.nomeCompleto = 'Júlio da Silva';
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
