import { calcularCostoIngredientes } from './reto1Modulo1.js';
import { calcularPorciones } from './reto1Modulo1.js';
import { sugerirReceta } from './reto1Modulo1.js';

const ingredientes = [
    { nombre: 'Harina', cantidad: 500, costo: 2 },
    { nombre: 'Azúcar', cantidad: 200, costo: 1.5 },
    { nombre: 'Huevos', cantidad: 4, costo: 1 },
    { nombre: 'Leche', cantidad: 250, costo: 0.8 }
];

const recetas = [
    { nombre: 'Pastel de vainilla', ingredientes: ['Harina', 'Azúcar', 'Huevos', 'Leche'] },
    { nombre: 'Galletas de chocolate', ingredientes: ['Harina', 'Azúcar', 'Huevos'] },
    { nombre: 'Cupcakes de fresa', ingredientes: ['Harina', 'Azúcar', 'Huevos', 'Leche'] }
];

const costoTotal = calcularCostoIngredientes(ingredientes);
document.getElementById('costoTotal').textContent = `Costo total de los ingredientes: $${costoTotal.toFixed(2)}`;

const porcionesPara4 = calcularPorciones(ingredientes, 4);
const porcionesTexto = porcionesPara4.map(({ nombre, cantidad }) => `${nombre}: ${cantidad.toFixed(2)}`).join(', ');
document.getElementById('porciones').textContent = `Cantidades necesarias por porción: ${porcionesTexto}`;

const recetaSugerida = sugerirReceta(recetas);
document.getElementById('recetaSugerida').textContent = `Receta Recomendada: ${recetaSugerida.nombre}`;