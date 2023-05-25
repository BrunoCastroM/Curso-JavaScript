/* 
Quantificadores (São usado para encontrar coisas):
    * (opcional) -> 0 ou mais vezes
    + (obrigatório) -> 1 ou mais vezes
    ? (opcional) -> 0 ou 1 vez
    {min, max} -> faz mesma coisa dos quatificadores de cima porém você escolhe o mínimo e o máximo.
        - {10,} -> Se for assim é no mínimo 10 para cima.
        - {, 10} -> Se for assim quer dizer que é de 0 a 10.
    \ -> é um caractere de escape. Exemplo: se você quiser pegar um ponto dentro da expressão regular, o ponto serve para selecionar tudo, porém se você quer so o ponto mesmo você tem que usar o "\"

*/ 

const { texto, arquivos } = require('./base')

// const regExp1 = /Jo+ão+/gi  // Nesse exemplo eu posso ter 1 ou mais "o" que ele vai encontrar

// console.log(texto.match(regExp1))


// const regExp2 = /\.jpe?g/gi // A interrogação serve justamente para dizer que pode ou nao aparecer o "e" (nesse caso) na string. A diferença do "?" e do "*" é que o "?" pega apenas uma ocorrência do "e", enquanto o "*" ele irá pegar se existir várias ocorrências do "e".
// const regExp3 = /\.jpe*g/gi

// for (const arquivo of arquivos) {
//     /* 
//     Condição para saber se o arquivo é válido ou não:
    
//     const valido = arquivo.match(regExp2)
//     if (!valido) continue
    
//     */ 

//     console.log( arquivo, arquivo.match(regExp2))
// }

// for (const arquivo of arquivos) {
//     console.log( arquivo, arquivo.match(regExp3))
    
// }

const regExp4 = /\.jpe{0,1}g/gi

for (const arquivo of arquivos) {
    console.log( arquivo, arquivo.match(regExp4))
    
}