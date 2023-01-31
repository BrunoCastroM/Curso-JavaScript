// Exercício: Escreva uma função chamada "ePaisagem" que recebe dois argumentos, largura e altura de uma imagem (number). Retorn true se a imagem estiver no modo paisagem.
function ePaisagem(largura, altura) {
    return largura > altura ? true : false;
}

console.log(ePaisagem(1920, 1080))


// Eu posso simplificar essa função (pois ela já retorna um valor "true" ou "false"):
function ePaisagem(largura, altura) {
    return largura > altura;
}

console.log(ePaisagem(1920, 1080))


// Outra forma de fazer (com arrow function):
const ePaisagem = (largura, altura) => {
    return largura > altura
}

console.log(ePaisagem(1920, 1080))


// Outra forma de fazer (com arrow function (somente 1 linha)):
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1920, 1080))

