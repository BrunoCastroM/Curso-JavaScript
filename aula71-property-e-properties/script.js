/* 
difineProperty(): serve para configurar uma ou mais propriedades do objeto.
difineProperties(): serve para configurar uma ou mais propriedades de um ou mais objetos.
OBS: São parecidas com a "Object.freeze()", porém esta faz no objeto inteiro.
*/

function Produto (nome, preco, estoque) {
    /* 
    Como eu já estou configurando os valores ali em baixo eu não preciso declarar eles normalmente.

    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
    */

    //Se eu quiser que só o "estoque" não seja público eu posso usar o "Object.defineProperty()"
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque,  // Valor da chave
        writable: false,  // Se pode ou não alterar o valor da chave
        configurable: true // Pode reconfigurar ou apagar a chave? Esse atributo sobrepoe ao "writable"
    });

    //Se eu quiser que "nome" e o "preco" não seja público eu posso usar o "Object.defineProperties()"
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: true
        },
    })
}

const p1 = new Produto('Camisa', 20, 3)
p1.estoque = 5000
console.log(p1);
console.log(Object.keys(p1));
console.log(Object.values(p1));
