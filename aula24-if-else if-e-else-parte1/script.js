/* 
Estrutura:

    if (condição) {
        código que irá executar
    } else if (condição) {
        código que irá executar
    } else {
        código que irá executar
    }

*/

// Exemplo:
const hora = 23;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23){
    console.log('Boa noite!');
} else {
    console.log('Informe um formato de horas válido!')
}

// OBS: O "if" pode ser usado sozinho
// OBS: Sempre que utilizo a o "else" eu tenho que ter um "if" antes
// OBS: Posso ter vários "else if" dentro da minha condição, como também posso não usar ele na minha condição
// OBS: Só posso ter um "else" em cada checagem
