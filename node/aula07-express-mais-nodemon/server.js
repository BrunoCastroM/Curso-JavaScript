// Importando o express e guardando o seu chamamento em uma variável:
const express = require('express');
const app = express();

/*
Métodos utilizandos no CRUD:
    - Create -> POST
    - Read -> GET
    - Update -> PUT
    - Delete -> DELETE

*/
// OBS: No método GET o express vai ajudar a entregar a página solicitada


// Usando o GET:
app.get('/', (requisicao, resposta) => {
    resposta.send(`
    <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        <br>
        <button>Enviar</button>
    </form>
    `);
});

// Se eu colocar o formulário de cima com o método POST ele irá usar esse código POST abaixo:
app.post('/', (requisicao, resposta) => {
    resposta.send('Recebi o formulário')
})

app.get('/contato', (requisicao, resposta) => {
    resposta.send('Obrigado por entrar em contato')
})


app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
    console.log('Acessar http://localhost:3000');
})