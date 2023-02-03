// Quando nós estamos trabalhando o browser a gente quer fugir do escopo global, ou seja, a gente não quer que o escopo do navegador (global) interaja com as nossas variáveis, funções e etc, pois poderiam entrar em conflito com o navegador.

/*
Sintaxe de uma função imediata, para proteger o código de interferências globais:

(funçao (parâmetros){
    escopo da função
})(argumentos);

*/
(function (nome, sobrenome, idade) {
    // Eu posso fazer qualquer coisa aqui dentro, que não irá afetar fora da função imediata
    const nome1 = 'Bruno'
    console.log(nome1);

    function somar(n1, n2) {
        return n1 + n2;
    }

    console.log(somar(2, 4));

    function apresetar() {
        console.log(nome, sobrenome, idade);
    }

    apresetar();
})('Bruno', 'Castro', 30);  // Aqui é onde se passa os argumentos para os parâmetros da função imediata.

const nome = 'Qualquer coisa';
console.log(nome);