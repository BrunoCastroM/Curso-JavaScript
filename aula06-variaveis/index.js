/*
Não podemos criar variáveis com palavras reservadas

Variáveis precisam ter nomes significativos
Ex: let nomeCliente = 'Bruno'

Não pode começar o nome de uma variável com um número
Ex: let 1nomeCliente = 'Bruno'

Não podem conter espaços ou traços
Ex¹: let nome Cliente = 'Bruno'
Ex²: let nome-Cliente = 'Bruno'

Utilizamos camelCase(primeira palavra minúscula, as outras palavras começando com letra maiúscula)
Ex: let nomeCliente = 'Bruno'

Case-sensitive (letra maiúscula e minúscula são consideradas diferentes)

OBS¹: Não podemos redeclarar variáveis com let
OBS²: NÃO UTILIZE VAR (é uma maneira de criar variáveis mais antiga), UTILIZE LET.
*/


let nome = 'Bruno';
let idade = 30
let peso = 76

console.log('Meu nome é',nome, 'nasci em', idade) // Forma de printar sem usar o format

console.log(`${nome} nasceu em 1992 e pesa ${peso}kG.`) // o format do JS é "${}"


// Eu posso também posso declarar a variável e depois usa-lá:

let sexo
sexo = 'Masculino'

console.log(`Sou do sexo ${sexo}`)

sexo = 'Feminino' // Posso mudar o valor da variável dessa forma

console.log(`Sou do sexo ${sexo}`)
