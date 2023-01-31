// O "setInterval" e o "setTimeout" são duas funções que estão disponiveis para o node e para o navegador, e funcionam através de milissegundos.

function mostrarHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

console.log(mostrarHora())

// Quando eu quiser trabalhar com intervalo de tempo eu posso usar o "setInterval":

/* 
function funcaoDoIntervalo() {
    console.log(mostrarHora());
}
setInterval(funcaoDoIntervalo, 1000);  // Aqui eu passo a referência da função (eu não chamo ela), ou posso simpelemente criar uma função anônima que irá ser execudada de 1 em 1 segundos
*/
// Posso usar as funções anônimas para simplificar o código: 
const timer = setInterval(function () {
    console.log(mostrarHora());
}, 1000);


// O "setTimeout" serve para colocar o intervalo de tempo que a função de cima irá terminar:

setTimeout(function() {
    clearInterval(timer);
}, 5000);

setTimeout(() => {
    console.log('Acabou o tempo!')
}, 1000);