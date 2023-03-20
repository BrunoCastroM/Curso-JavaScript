/*
req.params -> São as partes que vem na rota da url
                            Parâmetros
                                ↓
exemplo: http://facebook.com/profile/345324

req.query -> São as partes que vem depois do "?", tendo chaves e valores (se eu quiser colocar mais de uma eu uso o "&")
                            Chaves e valores da querystring
                                            ↓
exemplo: http://facebook.com/?chace1=valor1&chave2=valor2
exemplo conjunto:
                       Parâmetros
                           ↓
http://facebook.com/profile/12345?capanha=googleads&nome_campanha=qualqueruma
                                        ↑
                          Chaves e valores da querystring

*/
const express = require('express');
const app = express();

// O express não recebe os dados automaticamente, então a gente tem que colocar que quer receber os dados e receber os dados tratados (com esse código abaixo):
app.use(express.urlencoded({extended:true}))


/*
Para iniciar uma querystring você deve colocar "?"
Se eu quiser colocar mais chaves e parâmetros depois do primeiro em vez de "?" eu tenho que colocar "&"
*/

app.get('/', (requisicao, resposta) => {
    resposta.send(`
    <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        Outro nome: <input type="text" name="qualquernome">
        <br>
        <button>Enviar</button>
    </form>
    `);
});

// Eu coloco um parâmetro utilizando os ":" e depois o nome do parâmetro. Ex:"/:idUsuario". eu vou ter acesso aos dados(parâmetros) que forem enviados por meio de um objeto. E se eu quiser que ele seja opcional eu adciono no final um "?"
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    // link de exemplo: http://localhost:3000/testes/123/outroparametro/?nome=Bruno&sobrenome=Castro&idade=30
    // Eu consigo verificar os parâmetros usando o "req.params" e as querystrings com req.query:
    console.log(req.params); 
    console.log(req.query)

    // Acessando o que foi colocado nos parâmetros ou query
    // res.send(req.params);
    res.send(req.query.nome);
})

app.post('/', (req, res) => {
    console.log(req.body);
    // req.body.nome é nome por conta no "name" que eu coloquei lá em cima no input, agente pode tratar ele como o nome da chave
    res.send(`O que você me enviou foi: ${req.body.qualquernome}`);
})

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
    console.log('Acessar http://localhost:3000');
})