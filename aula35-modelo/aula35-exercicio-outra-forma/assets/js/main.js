const elementos = [
    {tag: 'p', texto: 'Frase 1',},
    {tag: 'div', texto: 'Frase 2',},
    {tag: 'footer', texto: 'Frase 3',},
    {tag: 'section', texto: 'Frase 4',},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;  // Em vez de usar o "innerHTML"(pois não tem um HTML no valor "texto") eu posso utilizar o "innerText" já que só tem texto no valor "texto"
    div.appendChild(tagCriada);
}
container.appendChild(div);

/* Em vez do "innerText" posso também utilizar o "createTextNode":
            let textCriado = document.createTextNode(texto);

            tagCriada.appendChild(textCriado)
*/ 