class persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }

  saludar() {
    return `Hola soy ${this.nombre}`;
  }
  cumplirAños() {
    return `Felicidades ${this.nombre}, cumpliste ${this.edad} años!!`;
  }
}

class estudiante extends persona {
  constructor(nombre, edad, genero, curso) {
    super(nombre, edad, genero);
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.curso = curso;
  }

  estudiar() {
    return `Hola ${this.nombre}, tu clase es:  ${this.curso}`;
  }
}

const persona1 = new persona("luis", 23, "M");
const estudiante1 = new estudiante("Andres", 17, "M", "Programacion");

console.log(persona1);
console.log(estudiante1);
