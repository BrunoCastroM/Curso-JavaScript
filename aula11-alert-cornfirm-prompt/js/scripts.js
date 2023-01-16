alert('Com a nossa mensagem');  // É um método que serve para colocar um alerta no navegador, não é muito legal de fazer hoje em dia. O valor retornado dele é "undefined"

window.confirm('Deseja realmente apagar?');  // É um método que serve para colocar uma caixa com uma opção se você se você deseja ou não confirmar algo. O valor retornado dele é um booleano (true o false)
// Eu posso jogar esse valor em uma variável:
let confirma = confirm('Deseja realmente apagar?')
console.log(confirma)  // OBS: No console do navegador não é necessário usar o método console.log() para aprensentar um dado, ele já faz automaticamente

window.prompt('Digite o seu nome:');  // É um método que serve para colocar uma caixa onde você irá pedir dados para o usuário. Retorna o valor que o usuário digitou