// Exercício: Escreva uma função que recebe 2 número e retorne o maior deles

function maior(numero1, numero2) {
    if (numero1 > numero2) {
        console.log(`O numero ${numero1} é maior que ${numero2}`);
    } else {
        console.log(`O numero ${numero2} é maior que ${numero1}`);
    }
}

maior(1, 5);


// Outra forma de fazer (refatorando ele com função ternária):
function max(x, y) {
    return x > y ? x : y;
}

console.log(max(10, 2))

// Outra forma de fazer (com arrow function):
const max2 = (x, y) => {
    return x > y ? x : y;
};

console.log(max2(1, 25))

// Quando a arrow function tem somente uma linha eu posso simplificar ela:
const max3 = (x, y) => x > y ? x : y;

console.log(max3(34, 22))