export function mostrarResultado(texto) {
  const resultadoDiv = document.getElementById("resultados");
  const p = document.createElement("p");
  p.textContent = texto;
  resultadoDiv.appendChild(p);
}
