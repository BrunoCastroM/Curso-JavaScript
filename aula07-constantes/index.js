// As regras das constantes são as mesmas das variáveis. A diferença é que você depois que atribui um valor para ela você não poderá mais atribuir outro valor para ela, gerando assim um erro.

const nome = 'Bruno';

console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);

const dividirResultado = resultado / 2;
console.log(dividirResultado);


// Verificando tipo da variável:

console.log(typeof primeiroNumero);
console.log(typeof nome);

// OBS: Quando o JS faz qualquer operação artimética com strings ele irá transformar toda a operação em string.EX:
const string = '5';
const numero = 4;

console.log(typeof(string + numero))

// Fazendo typing casting:
const trocarTipo = Number(string)

console.log(typeof(trocarTipo))

