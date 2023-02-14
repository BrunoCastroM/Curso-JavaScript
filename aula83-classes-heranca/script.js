class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já ligado`)
            return
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já desligado`)
            return
        }
        this.ligado = false;
    }
}
// Hedando outra classe usando o "extends"
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);  // o "super()" é basicamente chamar o construtor da classe pai para executar diretamente na classe filha. Se eu quiser colocar mais atributos é so fazer que nem em baixo.
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWiFi) {
        super(nome);
        this.temWiFi = temWiFi;
    }

    ligar() {  // Os métodos e os atributos criados na classe filha só estão disponíveis nela
        console.log('Você alterou o método ligar')
    }
}

const dispositivo1 = new DispositivoEletronico('Smartphone');
dispositivo1.ligar();
dispositivo1.ligar();
console.log(dispositivo1)
dispositivo1.desligar();
dispositivo1.desligar();
console.log(dispositivo1)

const s1 = new Smartphone('Samsung', 'Preto', 'galaxy s22');
s1.ligar();
console.log(s1)

const t1 = new Tablet('Ipad', true);
t1.ligar();
console.log(t1.ligado);