class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar() {
        console.log(`${this.marca} ${this.modelo} acelerando...`);
    }

    frear() {
        console.log(`${this.marca} ${this.modelo} freando...`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, cor) {
        super(marca, modelo)
        this.cor = cor;
    }

    ligar() {
        console.log(`${this.marca} ${this.modelo} ligado.`)
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    empinar() {
        console.log(`${this.marca} ${this.modelo} empinando...`);
    }
}

const carro1 = new Carro('Mercedes', 'C-250', 'Preto');
const moto1 = new Moto('Bmw', 'S-1000-RR', '1000cc');
const carro2 = new Carro('Ford', 'Ranger', 'Cinza');

carro1.acelerar();
carro1.ligar();
moto1.acelerar();
moto1.empinar();
carro2.frear();
