// Para dar nomes às funções deve-se usar as mesmas regras para dar nomes a variáveis

// Você pode colocar parâmetros (dados) para serem usado dentro da função (mesma forma do python)

function saudacao(nome) {
    return `Bom dia, ${nome}!`;
}
// OBS: Não precisa usar o ";" no final de uma função

saudacao('Bruno');  // Quando a função já faz algo dentro dela e  não precisa retornar nenhum valor eu posso chamar ela assim

// Salvando o chamamento da função dentro de uma variável:
const variavel = saudacao('Júlio');
console.log(variavel);  // Se eu for chamar desse jeito a variável irá dar erro, pois eu tenho que colocar o "return" dentro do escopo da função para para eu poder usar o seu resultado fora do escopo dela.


function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;  // Tudo que está abaixo do return não será executado
}

console.log(soma(2, 2));
console.log(soma());  // Se eu não mandar nenhum parâmetro para a função ele retornará "NaN". Nesse caso eu posso setar um valor padão na parte de parâmetros da função para não retornar esse valor.


// Função Anônima (maneira antiga de se criar funções anônimas):
const raiz1 = function (numero) {
    return numero ** 0.5;
}

console.log(raiz1(25))

// Arrow Function (maneira mais atual de criar um funções anônimas), é chamada assim por conta da setinha:
const raiz2 = (numero) => {
    return numero ** 0.5;
}

console.log(raiz2(64))

// Outra maneira de fazer a Arrow Function (simplificada):
const raiz3 = numero => numero ** 0.5;

console.log(raiz3(81))

const divisão = (dividendo, divisor) => dividendo / divisor;  // Quando existe mais de um parâmetro nessa forma simplificada da Arrow Function você deve mandar os "()" dele

console.log(divisão(100, 10))
