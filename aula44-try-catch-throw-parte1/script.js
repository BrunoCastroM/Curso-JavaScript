// O "try" é literalmente "tente" tal coisa, se não der você pega o erro com o "catch" 

// try {
//     console.log(variávelQueNãoExiste);
// } catch(err) {
//     console.log('Não existo não existe');
//     console.log(err);
// }


// OBS: se eu quiser verificar se um número é do tipo 'number' é so fazer o que eu fiz na linha 11
function soma(x, y) {
    if ( typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.');  // Se acontecer um erro o "throw" lança o parâmetro que você colocou nele com o erro que aconteceu
    }
    return x + y
}

try {
    console.log(soma(1, 3));
    console.log(soma(1, '3'));
} catch(error) {
    console.log (error)
    console.log ('Em vez de lançar o erro para o usuário eu posso escrever algo para suavizar o msg do ERROR')
}

