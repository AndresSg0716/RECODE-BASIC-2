const sumaArray = (arrayn, indice = 0) => {
  if (indice === arrayn.length) {
    return 0;
  }
  return arrayn[indice] + sumaArray(arrayn, indice + 1);
};

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const resultado = sumaArray(numeros);
console.log(resultado);
