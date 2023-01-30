// // Continue pula o a interação que você colocou para acontecer e vai para o próximo passo do laço sem executar o que está em baixo do continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for (let numero of numeros) {
    if (numero === 2) {  
        continue; // Nesse caso por conta do "continue" ele irá exercutar o código até o continue, depois disso ele irávoltar para o laço sem executar o resto do laço naquela vez que ele foi acionado.
    }
    if (numero === 8) {
        break;  // O break para o código quando a condição acontece (nesse caso o laço só irá até o número 8)
    }

    console.log(numero);
}

// Usando o "for in" para fazer a mesma coisa de cima
for (let i in numeros) {
    let numero = numeros[i]

    if (numero === 2) {  
        continue;
    }

    if (numero === 8) {
        break;
    }

    console.log(numero);
}


// Usando o for clássico para fazer:
for (let indice1 = 0; indice1 < numeros.length; indice1++) {
    let numero = numeros[indice1]

    if (numero === 2) {  
        continue;
    }

    if (numero === 8) {
        break;
    }

    console.log(numero);
}


// Usando o while:
let indice2 = 0;
while (indice2 < numeros.length) {
    let numero = numeros[indice2];

    if (numero === 2) {
        indice2++;
        continue;
    }

    if (numero === 8) {
        indice2++;
        break;
    }
    indice2++;
    console.log(numero);  
}


// Usando o do while:
let indice3 = 0;
do {
    let numero = numeros[indice3];

    if (numero === 2) {
        indice3++;
        continue;
    }

    if (numero === 8) {
        indice3++;
        break;
    }
    indice3++;
    console.log(numero);  
} while (indice3 < numeros.length);