/* 
Exercício: Escreva um função que recebe um número e retone o seguinte:
    - Numero divisível por 3 = 'Fizz'
    - Numero divisível por 5 = 'Buzz'
    - Numero divisível por 3 e 5 = 'FizzBuzz'
    - Numero NÃO é divisível por 3 e 5 = Retornar o próprio número
    - Checar se o número é realmente um número = Retornar o próprio número
    - Use a função com núemero de 0 a 100 
*/
const fizzBuzz = (numero) => {
    if (isNaN(numero)) return numero
    else {
        if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
        if (numero % 3 === 0) return 'Fizz';
        if (numero % 5 === 0) return 'Buzz';
        return numero
    }
    
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}