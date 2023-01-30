// Serve para quando você não sabe quantas vezes o laço irá se repetir

let i = 0;

while (i <= 5) {
    console.log(i);
    i++
}

console.log('segue a vida...')


const nome = 'Bruno';
let contador = 0;

while (contador <= nome.length) {
    console.log(nome[contador]);
    contador++;
}



function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 20;
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}


// A diferença do "do while" para o "while" é que o "while" ele sempre checa primeiro a condição se ela for falsa o programa nem entrar no laço, já no "do while" ele executa primeiro uma vez e depois é que irá verificar verificar a a condição. Exemplo:
do {
    console.log(rand)
}    while (rand !== 10)
        console.log('Passou por aqui');
