function crearSaludo(nombre) {
    return function() {
        console.log(`hola ${nombre}`);
    }
}

const saludo1 = crearSaludo('Juan')
const saludo2 = crearSaludo('Pepe')

saludo1()
saludo2()