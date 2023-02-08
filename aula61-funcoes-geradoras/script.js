// Elas são diferentes das outras, pois elas quase que pausam o código (ela faz um lazy evaluation)
function* geradora1() {
    // Código qualquer
    yield 'Valor 1';  // O "yield" é parecido com return, porém toda vez que a função for chamada ele passa o para o yield de baixo e com o "return" isso não acontece, pois acaba no primeiro "return".
    // Código qualquer
    yield 'Valor 2';
    // Código qualquer
    yield 'Valor 3';
}

const g1 = geradora1();

console.log(g1.next());  // para eu ver o valor dentro de uma função geradora eu tenho que colocar o método "next()".
// OBS: A "chave" done retorna "false" se ainda existir valor dentro da função para retornar, e true se já foram esgotadas os valores que irã retorna.
console.log(g1.next().value);
console.log(g1.next().value);

/* 
Eu posso fazer um for para isso também: 
    for (let valor of g1) {
        console.log(valor);
    }
*/

function* geradora2() {
    let i = 0;
    while(true) {
        yield i;
        i++
    }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


// Ligando um função geradora a outra:
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

for (let valor of g4) {
    console.log(valor)
}



function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    }

    yield function() {
        console.log('Vim do y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();