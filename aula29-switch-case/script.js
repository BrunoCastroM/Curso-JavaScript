const data = new Date()
let diaSemana = data.getDay()
let diaSemanaTexto

/*  
if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo'
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda'
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça'
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta'
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta'
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta'
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado'
} else {
    diaSemanaTexto = ''
}
O switch substitui esse código de cima
*/

// Se você quiser modificar só uma variável você pode usar ele para fazer isso
switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo'
        break  // O "break" é essêncial no switch se não ele irá executar o próximo case até ele achar a palavra break ai ele irá sair da condicinal. Porém dentro de uma função você pode usar o "return" em vez do "break"
    case 1:
        diaSemanaTexto = 'Segunda'
        break
    case 2:
        diaSemanaTexto = 'Terça'
        break
    case 3:
        diaSemanaTexto = 'Quarta'
        break
    case 4:
        diaSemanaTexto = 'Quinta'
        break
    case 5:
        diaSemanaTexto = 'Sexta'
        break
    case 6:
        diaSemanaTexto = 'Sábado'
        break
    default:  // O "default" é como se fosse o else
        diaSemanaTexto = ''
        break
}

console.log(diaSemana, diaSemanaTexto)


// criando uma função para o código acima:
function pegarDiaDaSemana(diaSemana) {
    let diaSemanaTexto

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto
        case 1:
            diaSemanaTexto = 'Segunda'
            return diaSemanaTexto
        case 2:
            diaSemanaTexto = 'Terça'
            return diaSemanaTexto
        case 3:
            diaSemanaTexto = 'Quarta'
            return diaSemanaTexto
        case 4:
            diaSemanaTexto = 'Quinta'
            break
        case 5:
            diaSemanaTexto = 'Sexta'
            return diaSemanaTexto
        case 6:
            diaSemanaTexto = 'Sábado'
            return diaSemanaTexto
        default:
            diaSemanaTexto = ''
            return diaSemanaTexto
    }
}

const data1 = new Date()
let diaSemana1 = data1.getDay()
const diaSemanaTexto1 = pegarDiaDaSemana(diaSemana1)

console.log(diaSemana1, diaSemanaTexto1)
