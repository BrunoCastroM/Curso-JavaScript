// A função date é uma função construtora. Sempre irá começar com letra maiúscula.Link para tirar dúvidas: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

const data1 = new Date()  // dentro dos parênteses ele recebe valor em milésimos de segundos, então é bom converter primeiro em uma variável por fora e depois colocá-la dentro. Se eu não colocar nada ele volta a data atual

console.log(data1.toString())


// A ordem é: ano -> mês(começa do zero) -> dia -> horas -> minutos -> segundos -> milésimos (não é necessario colocar todos)
const data2 = new Date(2023, 0, 20, 15, 14, 27, 500)
console.log(data2.toString())

// Formato mais utilizado(só colocar data e horas, ele recebe o dado como string):
const data3 = new Date('2023-01-24 10:45:10:100')
console.log('Dia: ', data3.getDate())
console.log('Mês: ', data3.getMonth() + 1)  // Como o mês ele começa do 0 no JS você deve somar + 1 para pegar o mês real
console.log('Ano: ', data3.getFullYear())
console.log('Horas: ', data3.getHours())
console.log('Minutos: ', data3.getMinutes())
console.log('Segundos: ', data3.getSeconds())
console.log('Milésimos: ', data3.getMilliseconds())
console.log('Dia Semana: ', data3.getDay())  // Nos dias da semana 0 é domingo e 6 é sábado
console.log(data3.toString())


console.log(Date.now())  // A hora atual, incluse os milésimos de segundos desde o marco zero, se eu pegar o valor voltado dos milisegundos  e colocar dentro de uma variável, como abaixo eu vou ter a data atual
const data4 = new Date(1674568059631)
console.log(data4)


// Exercício para formatar datas:
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}
function formatarData(data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const sec = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} - ${hora}:${min}:${sec}`
}

const data5 = new Date()
const dataBrasil = formatarData(data5)
console.log(dataBrasil)