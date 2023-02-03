// São funções executadas quando uma alguma coisa terminar de ocorrer.
// OBS: O "random" e "setTimeout" só está servindo para simular um ou mais processos que seriam feitos no site em ordem aleatória e que eu teria que arrumar a ordem.

function random(min = 1000, max = 3000) {
    const numero = Math.random() * (max - min) + min;
    return Math.floor(numero);
}

function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, random());
}
function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, random());
}
function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, random());
}

// Aqui você faz uma função para que seja executada na ordem que você quer
f1(function() {
    f2(function () {
        f3(function() {
            console.log('Olá Mundo!')
        });
    });
});

// Eu posso fazer assim também, em vez da árvore de natal aí de cima:
f1(f1CallBack);

function f1CallBack() {
    f2(f2CallBack);
}
function f2CallBack(f2CallBack) {
    f3(f3CallBack);
}
function f3CallBack(f2CallBack) {
    console.log('Olá mundo!')
}