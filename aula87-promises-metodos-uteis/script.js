// Métodos úteis para utilizar com a promises (Promise.all, Promise.race, Promise.resolve e Promise.reject):

function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espearaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(false)
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return
        }, tempo);
    });
}

// Promise.all() -> Resolve todas a promesas a traz todos os valor de volta, se uma der erro ele rejeita todas:
const promises1 = [
    'Primeiro valor',
    espearaAi('Promise 1', 3000),
    espearaAi('Promise 2', 500),
    espearaAi('Promise 3', 1000),
    'Outro valor'
];

Promise.all(promises1).then(function (valor) {
    console.log(valor);
}).catch(function (erro) {
    console.log(erro);
});

// Promise.race() -> Vai mandar varias promises ou valores e o primeiro(a) que resolver ele já entrega ou que já foi resolvido, se uma der erro tem que cair na que deu erro para voltar o erro)
const promises2 = [
    espearaAi('Promise 1', 3000),
    espearaAi('Promise 2', 500),  // Essa que vai ser executada, pois é a primeira que será resolvida
    espearaAi('Promise 3', 1000),
    // 'Outro valor'
];

Promise.race(promises2).then(function (valor) {
    console.log(valor);
}).catch(function (erro) {
    console.log(erro);
});

// Promise.resolve() e Promise.reject():
function baixaPagina() {
    const emCache = false;  // Se tiver cache ("true") ele já retorna página rapidamente se não ("false") ele carrega a página inteira

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return espearaAi('Baxei a página', 3000);  
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e));
// Obs o "Promise.resolve()" vai cair direto no "then()" e o "Promise.reject()" vai cair direto no "catch()"