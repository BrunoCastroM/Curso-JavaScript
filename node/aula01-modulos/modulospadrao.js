// Importando um modulo padrão do node. No exemplo usarei o axios
const axios = require('axios');

// Exemplo de requisão de um arquivo json que tem nesse site 
axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));