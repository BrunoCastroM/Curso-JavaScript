/*
Valores avaliados como falsy:

    0 -> Número zero
    '', "" e `` -> Strings vazias
    null e undefined  -> valores que retornam nulo ou indefinido
    NaN -> Que não são números

*/

/*
No valor "and" o JS para de checar os valores assim que ele encontra um valor "false" e retorna o valor dele, e se for tudo "true" retorna o último valor
*/
// Exemplo:
console.log('Bruno'&& 0 && 'Amanda');
console.log('Bruno'&& '' && 'Amanda');
console.log('Bruno'&& null && 'Amanda');
console.log('Bruno'&& undefined && 'Amanda');
console.log('Bruno'&& NaN && 'Amanda');

console.log('Bruno'&& 1 && 'Amanda');


// Exemplo de operações com curto-circuito (AND):
function falaOi() {
    return 'Oi';
}

let vaiExecutar = false;
console.log(vaiExecutar && falaOi());  // Nesse caso ele não executa a função pois ele para no primeiro valor "false" que ele encontrar.
// Agora irei passar um valor considerado "true":
vaiExecutar = 'Bruno';
console.log(vaiExecutar && falaOi());


/*
No valor "or" ele retorna o primeiro valor verdadeiro que ele encontrar na expressão, independente se a expressão tiver outro valor "true" depois.
*/
// Exemplo:
console.log(0 || false || null || 'Bruno Castro' || true);

// Exemplo de operações com curto-circuito (OR):
let corUsuario = null;
let corPadrao = corUsuario || 'Preto';
console.log(corPadrao);
// Agora irei passar um valor considerado "true":
corUsuario = 'Azul';
corPadrao = corUsuario || 'Preto';
console.log(corPadrao);