// As funções podem usar valores que estão fora do seu escopo local

const nome = 'Bruno';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Castro';  // O "Castro" não está saindo como resultado pois eu estou chamando a função "falaNome()" então ele irá pegar o valor da váriável "nome" de escopo global
    falaNome()
}

usaFalaNome();