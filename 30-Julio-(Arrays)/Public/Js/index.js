//Ciclo for y forof
let frutas = ['banano','manzana','pera']

for (let fruta of frutas) {
    console.log(fruta);
}

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//Map
let numeros = [1, 2, 3, 4, 5]
let dobles = numeros.map(function(numero){
    return numero*2
})

console.log(numeros);
console.log(dobles);

//Filter
let numeros2 = [1, 2, 3 , 4 , 5,]
let numerosmayoresq3 = numeros2.filter(function(numero2){
    return numero2 > 3
})

console.log(numeros2);
console.log(numerosmayoresq3);

//Reduce
let numeros3 = [1,2,3,4,5]
let suma = numeros3.reduce(function(acumulador, numero3){
    return acumulador + numero3;
}, 0)
console.log(suma);

//Find
let numeros4 = [1,2,3,4,5]
let mayorq3 = numeros4.find(function(numero4){
    return numero4 > 3;
})

console.log(mayorq3);