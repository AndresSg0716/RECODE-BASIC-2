export const calcularCostoIngredientes = (ingredientes) => {
    return ingredientes.reduce((total, { costo }) => total + costo, 0);
};
  
export const calcularPorciones = (totalIngredientes, porciones) => {
    return totalIngredientes.map(ingrediente => ({
      ...ingrediente,
      cantidad: ingrediente.cantidad / porciones
    }));
};
  
export const sugerirReceta = (recetas) => {
    const indiceAleatorio = Math.floor(Math.random() * recetas.length);
    return recetas[indiceAleatorio];
};
