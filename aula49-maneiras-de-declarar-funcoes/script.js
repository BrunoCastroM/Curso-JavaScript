//  Declaração de função (function hoisting) -> Faz com que você possa chamar a função tanto antes ou depois do onde ela foi criada. Essa é a declaração classica de função.
falaOi()

function falaOi() {
    console.log('oi');
}


// Funções são First-class objects (Objetos de primeira classe), ou seja você pode tratar as funções como dados
const souUmDado = function () {
    console.log('sou um dado');
};

function executarFuncao(funcao) {
    console.log('Vou executar sua função');
    funcao();
}

executarFuncao(souUmDado);


// Arrow functions:
const fucaoArrow = () => {
    console.log('Sou uma arrow function')
};

fucaoArrow();


// Função dentro de um Objeto:
const obj = {
    falar: function () {
        console.log('Estou excutando dentro de um objeto');
    },
    falar1() {
        console.log('Outra forma de fazer função dentro de um objeto')
    }
};
obj.falar()
obj.falar1()