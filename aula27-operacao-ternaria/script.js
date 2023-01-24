/* 
Operação ternária é representada por esse dois:
    ? (condição verdadeira)
    : (condição falsa)

    (condição) ? 'valor verdadeiro' : 'valor falso'

OBS: Serve para encurtar o seu código
*/

// Exemplo:
const pontuacaoUsuario1 = 1000

if (pontuacaoUsuario1 < 1000) {
    console.log('Usuário Normal')
} else {
    console.log('Usuário VIP')
}

// Exemplo de como encurtar o código acima:
const pontuacaoUsuario2 = 1000
const nivelUsuario = pontuacaoUsuario2 < 1000 ? 'Usuário Normal' : 'Usuário VIP'
console.log(nivelUsuario)


// Utilizando o "||":
const corUsuario = ''  // Se esse valor for falso a variável de baixo irá usar o valor padrão (no caso 'Preta')
const corPadrao = corUsuario || 'Preta'

console.log(corPadrao)