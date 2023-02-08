// A função recursiva é uma função que chama ela mesma
// Obs¹: Se você fizer muitas dessas funções o node vai dar erro
// Obs²: Ela funciona parecido com um laço de repetição
function recrusiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recrusiva(max);
}

recrusiva(0);