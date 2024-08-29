/*AGREGAR UN NUMERO*/
function array1(numero, nNumeros) {
  return [...numero, nNumeros];
}

let numeros = [1, 2, 3, 4];
let nuervoNumbero = 5;
let nuevoarray = array1(numeros, nuervoNumbero);

console.log(numeros);
console.log(nuevoarray);


/*ELIMINAR NUMERO*/

function array2(numero2) {
    let nezarrayr = [...numero2] 
    nezarrayr.pop()
    return nezarrayr
}
let numeris2 = [1, 2, 3, 4]
let introducirarray = array2(numeris2)

console.log(numeris2);
console.log(introducirarray);

/*-----------FUNCIONES COMBINADAS-------------
const add = x => x + 1
const multiply = x => x * 2

const composedFunction = x => multiply(add(x))

console.log(composedFunction(10));
---------------------------------------------*/

const multiply2 = x => x * 2
const addThree = x => x + 3

const compose = x => multiply2(addThree(x)); 

console.log(compose(10));
/*----------CURRYING--------------
const multiply3 = x => y => x * y

const double = multiply3(3)
console.log(double(5));
--------------------------------*/

/*---------------------RECURSION-----------------------
const factorial = n => (n <= 1 ? 1: n * factorial(n-1))
console.log(factorial(5)); = 120
-----------------------------------------------------*/

const factorial = n => (n <= 1 ? 1: n + factorial(n-1))
console.log(factorial(5));