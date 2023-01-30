const paragrafos = document.querySelector('.paragrafos');  // Obs: o "querySelector()" retorna o primeiro (somente um) elemento que ele encontrar com o valor colocado

const ps = document.querySelectorAll('p');  // Para selecionar vários elementos eu utilizo "querySelectorAll()" ele irá retornar um "NodeList", que é parecido com um array(mas não é igual) e eu passo fazer as coisas que eu faço com o array 


const estilosBody = getComputedStyle(document.body);  // serve para pegar tudo que foi computado pelo navegador de estilos nesse caso pelo body
backGroundColorBody = estilosBody.backgroundColor;

for (p of ps) {
    p.style.backgroundColor = backGroundColorBody;
    p.style.color = 'white'
}