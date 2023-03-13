import { nome as nome2, outroNome, idade, soma, dividir, Pessoa} from './modulo1'  // Não é nescessário usar o nome da exntensão ".js"\

// OBS: Eu posso usar o "as" para mudar o nome do que eu estou importando ou exportando, para não gerar conflitos

const nome = 'Julio';

console.log(nome, nome2, outroNome, idade);
console.log(soma(4, 5));

console.log(dividir(5, 5))

const p1 = new Pessoa('Amanda', 'Raissa');
console.log(p1);


// Importando tudo de um módulo(quando eu quiser que ele não venha para esse import é só eu deixar sem o export em qualquer coisa que eu quiser lá no módulo):
import * as MeuModulo from './modulo1'

console.log(MeuModulo.dividir(5,5));
