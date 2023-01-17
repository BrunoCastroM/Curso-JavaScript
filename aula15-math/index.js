// Arredondando para baixo com "math.floor":
let num1 = 9.86645
let num2 = Math.floor(num1)
console.log(num2)


// Arredondando para cima com "math.ceil":
num2 = Math.ceil(num1)
console.log(num2)


// Arredondando para o número mais próximo com "math.ceil":
let num3 = 9.49
let num4 = Math.round(num3)
console.log(num4)


// Achando o maior número de uma sequência de números "math.max":
console.log(Math.max(25, 35, 10, 9, 68, 12))


// Achando o menor número de uma sequência de números "math.min":
console.log(Math.min(25, 35, 10, 9, 68, 12))


// Gerando números aleatórios "math.random":
const aleatorio = Math.random()
console.log(aleatorio)
// Gerando números aleatórios entre intervalos "Math.random() * (máximo - mínimo) + inicio da contagem":
const aleatorio1 = Math.random() * (10 - 5) + 5
console.log(aleatorio1)
// Arredondando números aleatórios:
const aleatorio2 = Math.round(Math.random() * (5 - 1) + 1)
console.log(aleatorio2)


// Fomar de calcular raiz quadrada:
let num5 = 5
console.log(num5 ** (1/2))
console.log(num5 ** 0.5)


// A divisão por zero em JS volta um dado chamado "infinity" e retorna como true:
console.log(100 / 0)