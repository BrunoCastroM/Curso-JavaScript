// São valores mandados para as funções

function funcao1() {
    console.log(arguments);
    console.log(arguments[1]);

    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}

funcao1(3, 4, 5, 6, 72, 3, 4, 85,);  // O JS não da erro se você colocar um parâmetro na hora de chamar a função e ele não ter o valor para guardar o parâmetro. Porém, dentro da função o JS tem um variável chamada "arguments" (que não funciona nas "arrow functions") que salva todos os valores que não foram colocados em um parâmetro dentro de um objeto


// Colocando valores padrão para os parâmetros:
function funcao2(a, b = 2, c = 10) {
    console.log(a + b + c);
}

funcao2(1, undefined,);  // Se eu tiver um valor padrão que eu queira usar e ele está no meio de outros valores eu tenho que colocar o valor "undefined" se não dará erro


// fazendo atribuição via desestruturação (serve tanto para objetos quanto arrays):
// Via objetos:
function funcao3({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

funcao3({ nome: 'Bruno', sobrenome: 'Castro', idade: 30 });
// Via array:
function funcao4([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao4(['José', 'Antônio', 25]);


// Usando o rest operator ("..."). Ele sempre deve ser o último parâmetro da função:
function funcao5(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

funcao5('*', 1, 20, 30, 40, 50);

// Fazendo o mesmo código de cima só que com function expression (jogar uma função dentro de uma variável):
const conta = function (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};

conta('*', 1, 20, 30, 40, 50);