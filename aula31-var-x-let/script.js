/* 

"let" tem escopo de bloco, ou seja, tudo que está dentro das chaves funcionar.
"var" tem escopo de função, ou seja, não vai funcionar que nem a "let"

OBS: Lembrar que hoje em dia não se usa mais "var"
*/

const verdadeira = true;

let nome = 'Bruno';  // Criando uma variável no escopo global
var nome2 = 'Juliana';

var nome2 = 'Alistar';  // Com o "let" eu não posso fazer isso, já com o "var" eu posso redeclarar uma variável

if (verdadeira) {
    let nome = 'Moura';  // Aqui estou criando uma variável com o mesmo nome, porém ela é outra variável por estar dentro de um escopo diferente da variável de cima
    console.log(nome, nome2);
    if (verdadeira) {
        let nome = 'Castro';  // Aqui a variável "nome" já está em outro escopo e por isso eu posso criar outra com o mesmo nome. Além disso o JS executar a variável do escopo mais profundo para o global
        var nome2 = "Judite";
        console.log(nome, nome2);
    }
}

console.log(nome, nome2);  // Verifica-se aqui que a variável com "let" que irá ser usada é a do escopo global ("Bruno"), já a variável de "var" como tem escopo de função irá usar a última redeclaração dela ("Judite")


// OBS¹: Em uma função as variáveis são protegidas pelo escopo dela, então eu não posso chamar a variável diretamente fora do escopo da função. A não ser que eu chame

// Dica: O único escopo que "var" respeita é o de dentro da função, já o "let" respeita os escopos