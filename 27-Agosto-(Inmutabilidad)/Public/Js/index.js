class Animal {
  constructor(id, nombre, especie, edad, adoptado = false) {
    this.id = id;
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.adoptado = adoptado;
  }

  cambiarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  marcarAdoptado() {
    this.adoptado = true;
  }

  desmarcarAdoptado() {
    this.adoptado = false;
  }
}

class RefugioDeAnimales {
  constructor() {
    this.animales = [];
  }

  añadirAnimal(animal) {
    this.animales.push(animal);
  }

  eliminarAnimal(id) {
    this.animales = this.animales.filter((animal) => animal.id !== id);
  }

  obtenerAnimales() {
    return this.animales;
  }

  filtrarPorEspecie(especie) {
    return this.animales.filter((animal) => animal.especie === especie);
  }

  filtrarAdoptados() {
    return this.animales.filter((animal) => animal.adoptado === true);
  }

  actualizarEdadAnimales() {
    this.animales = this.animales.map((animal) => {
      return new Animal(
        animal.id,
        animal.nombre,
        animal.especie,
        animal.edad + 1,
        animal.adoptado
      );
    });
  }

  filtrarPorEdad(edadMinima) {
    return this.animales.filter((animal) => animal.edad >= edadMinima);
  }

  contarAnimales() {
    return this.animales.length;
  }
}

const refugio = new RefugioDeAnimales();
let idCounter = 0;

document
  .getElementById("animal-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const especie = document.getElementById("especie").value;
    const edad = parseInt(document.getElementById("edad").value);

    const animal = new Animal(idCounter++, nombre, especie, edad);
    refugio.añadirAnimal(animal);

    mostrarAnimales();
    this.reset();
  });

function mostrarAnimales() {
  const animalList = document.getElementById("animal-list");
  animalList.innerHTML = "";

  refugio.obtenerAnimales().forEach((animal) => {
    const animalDiv = document.createElement("div");
    animalDiv.classList.add("animal-card");
    if (animal.adoptado) {
      animalDiv.classList.add("adoptado");
    }

    const animalInfo = document.createElement("div");
    animalInfo.classList.add("animal-info");
    animalInfo.textContent = `${animal.nombre} (${animal.especie}) - ${
      animal.edad
    } años - ${animal.adoptado ? "Adoptado" : "No Adoptado"}`;

    const editButton = document.createElement("button");
    editButton.textContent = "Editar Nombre";
    editButton.addEventListener("click", function () {
      const nuevoNombre = prompt("Introduce el nuevo nombre del animal:");
      if (nuevoNombre) {
        animal.cambiarNombre(nuevoNombre);
        mostrarAnimales();
      }
    });

    const adoptButton = document.createElement("button");
    adoptButton.textContent = animal.adoptado
      ? "Desmarcar Adoptado"
      : "Marcar Adoptado";
    adoptButton.addEventListener("click", function () {
      if (animal.adoptado) {
        animal.desmarcarAdoptado();
      } else {
        animal.marcarAdoptado();
      }
      mostrarAnimales();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", function () {
      refugio.eliminarAnimal(animal.id);
      mostrarAnimales();
    });

    animalDiv.appendChild(animalInfo);
    animalDiv.appendChild(editButton);
    animalDiv.appendChild(adoptButton);
    animalDiv.appendChild(deleteButton);
    animalList.appendChild(animalDiv);
  });
}

// Ejemplo de uso de las otras funciones
document
  .getElementById("filtrar-especie")
  .addEventListener("click", function () {
    const especie = prompt("Introduce la especie para filtrar:");
    const animalesFiltrados = refugio.filtrarPorEspecie(especie);
    console.log(animalesFiltrados);
  });

document
  .getElementById("filtrar-adoptados")
  .addEventListener("click", function () {
    const animalesAdoptados = refugio.filtrarAdoptados();
    mostrarAnimales(animalesAdoptados);
  });
document
  .getElementById("actualizar-edad")
  .addEventListener("click", function () {
    refugio.actualizarEdadAnimales();
    mostrarAnimales();
  });

document.getElementById("filtrar-edad").addEventListener("click", function () {
  const edadMinima = parseInt(prompt("Introduce la edad mínima:"));
  const animalesFiltrados = refugio.filtrarPorEdad(edadMinima);
  console.log(animalesFiltrados);
});

document
  .getElementById("contar-animales")
  .addEventListener("click", function () {
    const totalAnimales = refugio.contarAnimales();
    alert(`Total de animales en el refugio: ${totalAnimales}`);
  });
