const nome = 'Bruno';
const sobrenome = 'Castro';
const idade = 30;

function soma(x, y) {
    return x + y;
}

// Se quiser exportar algo eu faço assim "export {"nome do que eu quero exportar"};":
export { nome, sobrenome as outroNome, idade, soma };


// Exportanto diretamente:
export function dividir(a, b) {
    return a / b;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// OBS: eu posso colocar o "default" depois do export para se eu quiser só exportar um coisa específica limitando o escopo