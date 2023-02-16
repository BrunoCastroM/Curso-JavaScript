// As promises vieram para melhorar as funções de call back (coisas que acontecem de forma assíncrona ficarem de forma síncrona, ordem de quando as coisas (funções ou outro tipo de coisa) são executadas)

function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function espearaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('This dada is not a string'))  // Simulando erro
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });  // Resolve é um parâmetro que serve para quando o código deu certo e o reject e quanto ele não deu certo.
}

espearaAi('Conexão com a Base de Dados.', aleatorio(1, 3)).then(resposta => {
    console.log(resposta);
    return espearaAi('Buscando dados da Base.', aleatorio(1, 3));
}).then(resposta => {
    console.log(resposta);
    return espearaAi(22222, aleatorio(1, 3))  // Simulando erro
}).then(resposta => {
    console.log(resposta);
}).then(() => {
    console.log('Exibindo dados na tela.');
}).catch(e => {
    console.log('String', e);
}); // Toda vez que chamar o resolve o ".then()" será executado, e quando acontecer um erro eu posso colocar ao ".catch()"

console.log('Esse vai ser carregado antes');  // Isso aqui vai ser exibido antes do promises, pois eles são executados em pararelo ao resto do código, ou seja as promises serão executadas depois.