export class Archivo {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

export class Carpeta {
  constructor(nombre) {
    this.nombre = nombre;
    this.contenido = [];
  }

  agregarContenido(item) {
    this.contenido.push(item);
  }
}

export class SistemaDeCarpetas {
  constructor(carpetaRaiz) {
    this.carpetaRaiz = carpetaRaiz;
  }

  contarArchivos(carpeta = this.carpetaRaiz) {
    let totalArchivos = 0;

    for (const item of carpeta.contenido) {
      if (item instanceof Archivo) {
        totalArchivos++;
      } else if (item instanceof Carpeta) {
        totalArchivos += this.contarArchivos(item);
      }
    }

    return totalArchivos;
  }
}
