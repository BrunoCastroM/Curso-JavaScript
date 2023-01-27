const nomes = ['Bruno', 'João', 'Luciano'];

for (i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// "for in" lê os índices ou chaves do objeto

// Forma mais parecida com o python de fazer o for, nesse caso a gente não tem o incrementador, teria que fazer por fora que nem no python 
for (let indice in nomes) {
    console.log(nomes[indice]);
}


const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Castro',
    idade: 30
};

for (chaves in pessoa) {
    console.log(`Chave: ${chaves}, Valor: ${pessoa[chaves]}`);
}

for (chaves in pessoa) {
    console.log(pessoa.chaves); // Outra forma de acessar os valores de um objeto
}

