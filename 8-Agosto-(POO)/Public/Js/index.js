class vehiculo {
    constructor(marca, modelo, año, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
    }

    detalles() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}

const vehiculo2 = {
    detalles() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
};

function vehiculoAntiguo(marca, modelo, año, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.precio = precio;
}

vehiculoAntiguo.prototype = Object.create(vehiculo2);
vehiculoAntiguo.prototype.constructor = vehiculoAntiguo;

vehiculoAntiguo.prototype.mostrarAntiguedad = function() {
    const añoActual = new Date().getFullYear();
    return añoActual - this.año;
};

const cocheAntiguo = new vehiculoAntiguo('Chevrolet', 'Chevelle SS', 1969, 30000);
cocheAntiguo.numPuertas = 2;

class coche extends vehiculo {
    constructor(marca, modelo, año, precio, numPuertas) {
        super(marca, modelo, año, precio);
        this.numPuertas = numPuertas;
    }

    detalles() {
        return `${super.detalles()}, Número de puertas: ${this.numPuertas}`;
    }
}

class moto extends vehiculo {
    constructor(marca, modelo, año, precio, tipoDeMotor, claseDeMoto) {
        super(marca, modelo, año, precio);
        this.tipoDeMotor = tipoDeMotor;
        this.claseDeMoto = claseDeMoto;
    }

    detalles() {
        return `${super.detalles()}, Tipo de motor: ${this.tipoDeMotor}, Clase de Moto: ${this.claseDeMoto}`;
    }
}

class concesionario {
    static calcularPrecioFinal(precioBase, impuestos) {
        return precioBase + (precioBase * impuestos);
    }
}

const miCoche = new coche('Toyota', 'Corolla', 2022, 20000, 4);
const miMoto = new moto('Honda', 'CBR', 2022, 10000, '4 tiempos', 'deportiva');

const precioFinalCoche = concesionario.calcularPrecioFinal(miCoche.precio, 0.10);
const precioFinalMoto = concesionario.calcularPrecioFinal(miMoto.precio, 0.10);
const precioFinalClasico = concesionario.calcularPrecioFinal(cocheAntiguo.precio, 0.15);

document.getElementById('detallesCoche').innerHTML = `
    <h2>Detalles del Coche Moderno</h2>
    <p>${miCoche.detalles()}</p>
    <p>Precio final del coche: $${precioFinalCoche}</p>
`;

document.getElementById('detallesMoto').innerHTML = `
    <h2>Detalles de la Moto</h2>
    <p>${miMoto.detalles()}</p>
    <p>Precio final de la moto: $${precioFinalMoto}</p>
`;

document.getElementById('detallesCocheAntiguo').innerHTML = `
    <h2>Detalles del Coche Antiguo</h2>
    <p>${cocheAntiguo.detalles()}</p>
    <p>Antigüedad del coche: ${cocheAntiguo.mostrarAntiguedad()} años</p>
    <p>Precio final del coche: $${precioFinalClasico}</p>
`;