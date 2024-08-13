function saludar(nombre) {
    console.log(`bienvenido ${nombre}`)
}

let nombre = "Juan"
const intervalo = 3000
let contador = 0
const maxontador = 6

function Saludar6veces() {
    if (contador < maxontador) {
        saludar(nombre);
        contador++;
        setTimeout(Saludar6veces, intervalo) 
    }
}

Saludar6veces()