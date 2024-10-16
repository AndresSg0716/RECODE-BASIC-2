const animales = [
    { nombre: 'Simba', especie: 'León', edad: 5, hábitat: 'Sabana' },
    { nombre: 'Manny', especie: 'Elefante', edad: 12, hábitat: 'Selva' },
    { nombre: 'Rex', especie: 'Tigre', edad: 7, hábitat: 'Selva' },
    { nombre: 'Polly', especie: 'Guacamayo', edad: 3, hábitat: 'Bosque Tropical' },
    { nombre: 'Rodrigo', especie: 'Cocodrilo', edad: 19, hábitat: 'Pantanos' }
];
  
function mostrarAnimales() {
    const listaAnimales = document.getElementById('animal-list');
    
    animales.forEach(animal => {
      const li = document.createElement('li');
      li.textContent = animal.nombre;
      
      li.addEventListener('click', () => mostrarInfoAnimal(animal));
      
      listaAnimales.appendChild(li);
    });
  }
  
function mostrarInfoAnimal({ nombre, especie, edad, hábitat }) {
    const info = document.getElementById('animal-info');
    info.style.display = 'block';
    info.innerHTML = `
      <h2>Información del Animal</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Especie:</strong> ${especie}</p>
      <p><strong>Edad:</strong> ${edad} años</p>
      <p><strong>Hábitat:</strong> ${hábitat}</p>
    `;
}
  
document.addEventListener('DOMContentLoaded', mostrarAnimales);
  