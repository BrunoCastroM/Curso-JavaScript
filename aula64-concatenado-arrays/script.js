// Função "concat()":
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat('Bruno', a2, [7, 8, 9]); // Posso colocar ainda mais valores para concatenar.
console.log(a3);

// spread operator (funciona nos array e nos objetos):
const a4 = [1, 2, 3];
const a5 = [4, 5, 6];
const a6 = [...a4, ...a5, ...[7, 8, 9]]  // Funciona do mesmo jeito do "concat()"para mais valores. A diferença fica em outro array dentro, que eu tenho que colocar outro spread operator antes do array
console.log(a6);