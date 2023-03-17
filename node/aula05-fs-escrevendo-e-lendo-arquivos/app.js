const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'test.json');
const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

// Escrever o arquivo:
const pessoas = [
    {nome: 'João'},
    {nome: 'Juvenal'},
    {nome: 'Debora'},
    {nome: 'Julia'},
];
const converteJson = JSON.stringify(pessoas, '', 2);
escrever(caminhoArquivo, converteJson);


// Ler o arquivo e percorrer os dados:
async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val =>console.log(val.nome))
}

lerArquivo(caminhoArquivo)

// const dadosArquivo = lerArquivo(caminhoArquivo)
//     .then(dados => console.log(dados));




/* 
// Documentação em um único arquivo:

const fs = require('fs').promises;
const path = require('path');

// Pegando o caminho da pasta menos 1 nível (no caso a pasta da aula 5), e nomeando ele de "test.json":
const caminhoArquivo = path.resolve(__dirname, '..', 'test.json');  

// Criando um array com nomes dentro de objetos:
const pessoas = [
    {nome: 'João'},
    {nome: 'Juvenal'},
    {nome: 'Debora'},
    {nome: 'Julia'},
];

// Transformando esse array para json:
const arquivoJson = JSON.stringify(pessoas, '', 2);

// Escrevendo o arquivo (No "writeFile" você coloca o caminho que você quer que ele escreva, o conteúdo, e um objeto com algumas configurações):
fs.writeFile(caminhoArquivo, arquivoJson, {flag: 'w', encoding: 'utf8'})
// OBS: O padrão do encoding já é utf8, então não precisa colocar


Flags:
w: Abre o arquivo para escrita, truncando o conteúdo anterior, caso exista.
wx: Abre o arquivo para escrita, mas falha se o arquivo já existir.
a: Abre o arquivo para anexar dados ao final, preservando o conteúdo anterior.
ax: Abre o arquivo para anexar dados ao final, mas falha se o arquivo já existir.
x: Abre o arquivo para escrita exclusiva, falhando se o arquivo já existir.
r+: Abre o arquivo para leitura e escrita.
a+: Abre o arquivo para leitura e escrita, anexando dados ao final.

*/