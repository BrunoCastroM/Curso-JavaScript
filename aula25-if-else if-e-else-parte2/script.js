// A estrutura condicional verifica a primeira condição verdadeira e imediatamente sai do bloco.

const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('Seu número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número não está entre 6 e 8.');
} else if (1 === 1){  // Condição verdadeira que irá quebrar a estrutura condicional
    console.log('O bloco condicional irá parar aqui')
} else if (numero >= 9 && numero <= 11) {
    console.log('O número não está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}

console.log('...E pular para cá')