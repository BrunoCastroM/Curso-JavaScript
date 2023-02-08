// O forEach() só funciona em arrays

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Usando o for para interar em um array:
for (let valor of a1) {
    console.log(valor);
}
// Com o forEach():
a1.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
})
// Simplificando com arrow function:
a1.forEach((valor, indice) => console.log(valor, indice))