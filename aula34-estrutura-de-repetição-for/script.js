// // Estrutura do for: for(criar variável; condição; incrementar ou decrementara variável de controle) {expressão que será executada}

for (let i = 10; i <= 50; i++) {
    console.log(`Linha ${i}`)
}

for (let i = 10; i <= 50; i += 10) {
    console.log(`Linha ${i}`)
}

for (let i = 50; i >= 10; i -= 10) {
    console.log(`Linha ${i}`)
}

for (let i = 0; i <= 20; i++) {
    const par = i % 2 === 0 ? i : 'Não é par'
    console.log(par)
}

const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Melância']

for (i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}