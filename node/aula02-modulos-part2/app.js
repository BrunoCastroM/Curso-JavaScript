// Importando os módulos inteiro e jogando em uma variável
const Cachorro = require('./pacote1/pacote2/pacote3/mod');
const Importando = require('./pacote1/pacote2/pacote3/mod');

const classe = new Importando('Teddy');
classe.latir();
// OBS: O "." Representa a pasta atual e a "/" o seu seguimento, já o ".." representa voltar da pasta atual.


// Importando mod2:
const cachorro = new Cachorro('Burgão');
cachorro.latir();


// Duas variáveis que ajudam a ver os caminho:
console.log(__filename);  // Caminho do aquivo atual
console.log(__dirname);  // Caminho da pasta atual

// Função do nome que verifica o caminho da pasta atual, porém com alguma funções a mais:
const path = require('path');
console.log(path.resolve(__dirname, '..', '..'))  // Caminho da pasta atual, voltando duas pastar