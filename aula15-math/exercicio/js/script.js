let numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML += ''  // É necessário primeiro limpar o campo
texto.innerHTML += `<p>Raiz quadrada é ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>É inteiro?: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN?: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;

