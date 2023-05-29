// Retrovisóres -> 1$ 2$ 3$, são como se fosse as variáveis. OBS: dentro de match eu não posso usar a sifrão então eu tenho que usar a barra invertida "\"
const { html2 } = require('./base')

console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g))
console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 tag $3 tag $4'));