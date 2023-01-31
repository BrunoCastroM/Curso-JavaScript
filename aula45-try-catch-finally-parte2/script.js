// Resumo:

try {
    // Essa parte do código é executada quando não há erros
} catch (e) {
    // Essa parte é executada quando o erro acorre
} finally {
    // O "finally" será executado sempre, use quando você quiser executar uma parte do código toda vez
}


// Exemplo do percurso de um arquivo: 
try {
    console.log('Abrir aquivo');
    console.log('Manipulei o arquivo e gerou erro', a);
    console.log('Fechei o arquivo');
} catch (e) {
    console.log('Tratando o erro');
} finally {
    console.log('Aqui eu posso tentar fechar o arquivo, após tratar o erro')
}
// OBS: eu posso colocar outro try dentro de outro


// Outro exemplo¹:
function retonaHora(data) {
    if (!(data instanceof Date)) {
        throw new TypeError('Formato de data incorreto')
    }
}

retonaHora(4)


// Outro exemplo²:
function retonaHora(data) {
    if (data &&!(data instanceof Date)) {
        throw new TypeError('Formato de data incorreto');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const hora = retonaHora();  // Se eu colocar um formato que não seja data ele irá dar erro
    console.log(hora)
} catch(e) {
    console.log('Coloque o formato de horas correto')
} finally {
    console.log('Tenha um bom dia!')
}