// O "return" retorna o valor da função. Também quando utilizamos o return, ele termina a função

function soma1(a, b) {
    return a + b;
}

console.log(soma1(2, 6))

// Sem return:
function soma2(a, b) {
    console.log(a + b);
}

soma2(5, 6)


// OBS: Existem funções que não precisam do "return" para funcionar. Exemplo:
document.addEventListener('click', function () {
    document.body.style.backgroundColor = 'red';
})


// Funções dentro de outras funções:
function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

// Resolvendo o problema de criar várias funções para um único objetivo:
function criaMultiplicador(multiplicador) {
    return function(numero) {
        return numero *  multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));