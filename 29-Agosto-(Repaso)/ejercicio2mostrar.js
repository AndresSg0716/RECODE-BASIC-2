import { suma, resta, multiplicacion, division } from './ejercicio2matematicas.js';
import { mostrarResultado } from './ejercicio2utilidades.js';

const resultadoSuma = suma(10, 5);
mostrarResultado(`El resultado de la suma es: ${resultadoSuma}`);

const resultadoResta = resta(10, 5);
mostrarResultado(`El resultado de la resta es: ${resultadoResta}`);

const resultadoMultiplicacion = multiplicacion(10, 5);
mostrarResultado(`El resultado de la multiplicación es: ${resultadoMultiplicacion}`);

const resultadoDivision = division(10, 1);
mostrarResultado(`El resultado de la división es: ${resultadoDivision}`);
