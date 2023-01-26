/*  
const h1 = document.querySelector('.container h1')
const data = new Date()


function pegarNomeDiaDaSemana(numeroSemana) {
    let nomeDiaDaSemana

    switch (numeroSemana) {
        case 0:
            nomeDiaDaSemana = 'Domingo'
            return nomeDiaDaSemana
        case 1:
            nomeDiaDaSemana = 'Segunda-feira'
            return nomeDiaDaSemana
        case 2:
            nomeDiaDaSemana = 'Terça-feira'
            return nomeDiaDaSemana
        case 3:
            nomeDiaDaSemana = 'Quarta-feira'
            return nomeDiaDaSemana
        case 4:
            nomeDiaDaSemana = 'Quinta-feira'
            break
        case 5:
            nomeDiaDaSemana = 'Sexta-feira'
            return nomeDiaDaSemana
        case 6:
            nomeDiaDaSemana = 'Sábado'
            return nomeDiaDaSemana
        default:
            nomeDiaDaSemana = ''
            return nomeDiaDaSemana
  }
}

function pegarNomeMes(numeroMes) {
    let nomeDoMes

    switch (numeroMes) {
        case 0:
            nomeDoMes = 'Janeiro'
            return nomeDoMes
    }
    switch (numeroMes) {
        case 1:
            nomeDoMes = 'Fevereiro'
            return nomeDoMes
    }
    switch (numeroMes) {
        case 2:
            nomeDoMes = 'Março'
            return nomeDoMes
    }
    switch (numeroMes) {
        case 3:
            nomeDoMes = 'Abril'
            return nomeDoMes
    }
    switch (numeroMes) {
        case 4:
            nomeDoMes = 'Maio'
            return nomeDoMes
    }
    switch (numeroMes) {
        case 5:
            nomeDoMes = 'Junho'
            return nomeDoMes
    }
    switch (numeroMes) {
        case 6:
            nomeDoMes = 'Julho'
            return nomeDoMes
    }
    switch (numeroMes) {
        case 7:
            nomeDoMes = 'Agosto'
            return nomeDoMes
    }
    switch (numeroMes) {
        case 8:
            nomeDoMes = 'Setembro'
            return nomeDoMes
    }
    switch (numeroMes) {
        case 9:
            nomeDoMes = 'Outubro'
            return nomeDoMes
    }
    switch (numeroMes) {
        case 10:
            nomeDoMes = 'Novembro'
            return nomeDoMes
    }
    switch (numeroMes) {
        case 11:
            nomeDoMes = 'Dezembro'
            return nomeDoMes
  }
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function criarData (data) {
    const numeroSemana = data.getDay()
    const numeroMes = data.getMonth()

    const nomeDiaDaSemana = pegarNomeMes(numeroMes)
    const nomeDoMes = pegarNomeDiaDaSemana(numeroSemana)

    return `${nomeDoMes}, ${data.getDate()} de ${nomeDiaDaSemana} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}h`
}

h1.innerHTML = criarData(data)
*/


/*------------------------------------------------------------------------*/

/* 
// Jeito mais simples de fazer isso (em vez de usar o switch usa-se um array)¹:

const h1 = document.querySelector('.container h1')
const data = new Date()


function pegarNomeDiaDaSemana(numeroSemana) {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    return diasSemana[numeroSemana]
}

function pegarNomeMes(numeroMes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[numeroMes]
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function criarData(data) {
    const numeroSemana = data.getDay()
    const numeroMes = data.getMonth()

    const nomeDiaDaSemana = pegarNomeMes(numeroMes)
    const nomeDoMes = pegarNomeDiaDaSemana(numeroSemana)

    return `${nomeDoMes}, ${data.getDate()} de ${nomeDiaDaSemana} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}h`
}

h1.innerHTML = criarData(data)
*/

/*------------------------------------------------------------------------*/

/*  
// Jeito mais simples de fazer isso²:
const h1 = document.querySelector('.container h1')
const data = new Date()
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}

h1.innerHTML = data.toLocaleString('pt-BR', opcoes)
*/

/*------------------------------------------------------------------------*/

// Jeito mais simples de fazer isso³:
const h1 = document.querySelector('.container h1')
const data = new Date()

h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })