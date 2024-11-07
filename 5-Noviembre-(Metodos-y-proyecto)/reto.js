let arr = [2,4,6,8,9,1];
arr.sort((a, b) => a - b); 
console.log("Array ordenado:", arr);

function busqueda(array, indice) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mitadArreglo = Math.floor((left + right) / 2);

        if (array[mitadArreglo] === indice) {
            return mitadArreglo; 
        } else if (array[mitadArreglo] < indice) {
            left = mitadArreglo + 1; 
        } else {
            right = mitadArreglo - 1;
        }
    }
    return -1;
}

let indice = 6;
let resultado = busqueda(arr, indice);

if (resultado !== -1) {
    console.log(`Número ${indice} encontrado en el índice ${resultado}`);
} else {
    console.log(`Número ${indice} no encontrado`);
}