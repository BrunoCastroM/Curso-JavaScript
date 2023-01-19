/*

// Exemplificação em vez de usar o "getElement":

// OBS: Tudo que que acontece no navegador é um evento. Ex: Mexer no mouse, colocar uma palavra no input, enviar, etc

// Existe uma maneira de proteger o nosso código para que ele não sofra influências do escopo global ou externas (bibliotecas, etc), pois podem sofrer conflitos com alguma coisa que você instale, ai em vez de colocar tudo diretamente eu coloco meu código dentro de um função


function meuEscopo() {
    const form = document.querySelector('.form');  // O "querySelector" é uma forma mais atual para pegar um elemento HTML. A forma dele é mais simples pois ele usa pega o elemento HTML da mesma forma que você pega o seletor no CSS.

    // // Impedindo o envio do formulário com o "preventDefault" (maneira mais antiga). Ele previne o que era para acontecer por padrão, que seria enviar imediatamente o formulário.

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();  
    //     alert(1);
    //     console.log('Olá!');
    // }
    

    // Forma mais atual de fazer isso:
    contador = 1
    function recebeEventoForm(evento) {
        evento.preventDefault();
        console.log(`Form não foi enviado ${contador}`);
        contador++
    }
    // Adicionando um escutador de eventos ("addEventListener") para impedir o envio de formulários imediatamente.
    form.addEventListener('submit', recebeEventoForm); // Você irá colocar o evento que você quer escutar e uma função
}

meuEscopo();

*/


function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: Number(idade.value),
            altura: Number(altura.value),
            peso: Number(peso.value),
        })

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${idade.value} ${altura.value} ${peso.value}</p>`
        
        // console.log(nome.value, sobrenome, idade, altura, peso);  // Para selecionar o valor da variável é so colocar "nomeVariável.value"
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();