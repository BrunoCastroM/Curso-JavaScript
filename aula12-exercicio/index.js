let varA = 'A';
let varB = 'B';
let varC = 'C';

const outraVariavel = varA
varA = varB
varB = varC
varC = outraVariavel

console.log(varA, varB, varC)


// Outra forma de fazer o exercício¹:

let varD = 'D';
let varE = 'E';
let varF = 'F';

[varD, varE, varF] = [varE, varF, varD]

console.log(varD, varE, varF)