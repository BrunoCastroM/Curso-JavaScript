exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        Outro nome: <input type="text" name="qualquernome">
        <br>
        <button>Enviar</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send('Nova rota de post')
}