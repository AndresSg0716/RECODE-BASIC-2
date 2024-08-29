function encontrarUnico(array, callback) {
    const unico = array.find(num => array.indexOf(num) === array.lastIndexOf(num));
    callback(unico);
}

function mostrarUnico(numero) {
    console.log(`El número único es: ${numero}`);
}

const numeros = [2, 3, 5, 2, 3, 5, 7];
encontrarUnico(numeros, mostrarUnico);