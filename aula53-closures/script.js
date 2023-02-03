// Basicamente é o grau de acesso de uma função aos escopos do JS


function retornaFuncao (nome) {
    return function() {
        return nome;
    };
}

const funcao1 = retornaFuncao('Bruno');
const funcao2 = retornaFuncao('Castro');
console.log(funcao1());
console.log(funcao2());