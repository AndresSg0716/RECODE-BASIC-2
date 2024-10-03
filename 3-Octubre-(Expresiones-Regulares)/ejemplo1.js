//EJERCICIO 1

let regexip = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)$/;
let ipv4 = '189.235.12.213'
console.log(regexip.test(ipv4));



//EJERCICIO 2

let regexcrcrt = /\d{13,16}/
let cart = "1234567890123412"
console.log(regexcrcrt.test(cart));



//EJERCICIO 3

let regextel = /^\d{3}-\d{3}-\d{4}$/;
let numtel = '322-634-5075';
console.log(regextel.test(numtel));


//EJERCICIO 4

let regexEmail = /^[a-zA-Z0-9._%+-]+@[hotmail|gmail|outlook]+\.com$/;
let email = 'usuario@gmail.com';
console.log(regexEmail.test(email));