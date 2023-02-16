// Async e Await, vieram para melhorar o promises:

function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espearaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Cai no Erro')
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// Forma mais simples do que usar a promises:
async function executa() {
    try{
        const fase1 = await espearaAi('Fase 1', aleatorio());
        console.log(fase1);
    
        const fase2 = await espearaAi('Fase 2', aleatorio());
        console.log(fase2);
    
        const fase3 = await espearaAi(3, aleatorio());
        console.log(fase3);
    
        console.log('Terminamos da fase: ', fase3);

    } catch(e){
        console.log(e);
    }
}

executa();