const pessoas = [
    { id: 3, nome: 'Bruno' },
    { id: 2, nome: 'Pedro' },
    { id: 1, nome: 'Juliana' },
];

/* 

const novasPessoas = {};
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa };
}
console.log(novasPessoas);
*/


// Posso fazer assim também, para não mudar a ordem dos objetos dentro do array:
const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}
console.log(novasPessoas);
console.log(novasPessoas.get(2));