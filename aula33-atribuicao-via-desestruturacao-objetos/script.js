// Quase a mesma coisa com os arrays

const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Castro',
    idade: 30,
    endereco: {
        rua: 'Av Salvador',
        numero: 320
    }
};


// Utilizando a atribuição via desestruturação:
const {nome = 'Ronaldo', sobrenome, idade, endereco:{rua, numero}} = pessoa;  // Isso extrai do objeto chave como nome "nome" e joga na variável "nome", e assim sucessivamente. Também posso colocar valores padrão
console.log(nome, sobrenome, idade, rua, numero);


// Pegando tudo do objeto e colocando em outra variável, aqui também eu posso separar para pegar o resto de o objeto.
const {...tudo} = pessoa;

console.log(tudo);