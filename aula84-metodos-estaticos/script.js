// São métodos que você pode acessar na classe sem instânciá-la (sem usar a plavra new). E eles não estarão disponíveis na instância.

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // Métodos de instância (só muda o valor do "constrole1" por exemplo, não vai afetar outros):
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -+ 2;
    }

    // Métodos estáticos (vai mudar o valor geral não importa qual instância seja):
    static trocaPilha() {
        console.log('vou trocar')
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

// Acessando métodos estáticos (tem que ser pela classe e não pela instância). Eu também não tenho acesso aos atributos do construtor:
ControleRemoto.trocaPilha();