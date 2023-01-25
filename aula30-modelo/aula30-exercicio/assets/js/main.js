const data = new Date()
let dia = data.getDate()
let mes = data.getMonth()
let mesEmTexto
let ano = data.getFullYear()
let diaDaSemana = data.getDay()
let diaDaSemanaEmTexto

const resultado = document.querySelector('.container h1')

switch (diaDaSemana) {
    case 0:
        diaDaSemanaEmTexto = 'Domingo'
        break
    case 1:
        diaDaSemanaEmTexto = 'Segunda-feira'
        break
    case 2:
        diaDaSemanaEmTexto = 'Terça-feira'
        break
    case 3:
        diaDaSemanaEmTexto = 'Quarta-feira'
        break
    case 4:
        diaDaSemanaEmTexto = 'Quinta-Feira'
        break
    case 5:
        diaDaSemanaEmTexto = 'Sexta-feira'
        break
    case 6:
        diaDaSemanaEmTexto = 'Sábado'
        break
}

switch (mes) {
    case 0:
        mesEmTexto = 'Janeiro'
        break
    case 1:
        mesEmTexto = 'Fevereiro'
        break
    case 2:
        mesEmTexto = 'Março'
        break
    case 3:
        mesEmTexto = 'Abril'
        break
    case 4:
        mesEmTexto = 'Maio'
        break
    case 5:
        mesEmTexto = 'Junho'
        break
    case 6:
        mesEmTexto = 'Julho'
        break
    case 7:
        mesEmTexto = 'Agosto'
        break
    case 8:
        mesEmTexto = 'Setembro'
        break
    case 9:
        mesEmTexto = 'Outubro'
        break
    case 10:
        mesEmTexto = 'Novembro'
        break
    case 11:
        mesEmTexto = 'Dezembro'
        break
}

function zeroAEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`
}

function formatarHoras(hora, minuto) {
    const horas = zeroAEsquerda(hora)
    const minutos = zeroAEsquerda(minuto)
    return `${horas}:${minutos}`
}

let horaFormatada = formatarHoras(data.getHours(), data.getMinutes())

resultado.innerHTML = `${diaDaSemanaEmTexto}, ${dia} de ${mesEmTexto} de ${ano}. As ${horaFormatada}h`
