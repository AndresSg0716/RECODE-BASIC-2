const libros = [
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', calificacion: 5 },
    { titulo: '1984', autor: 'George Orwell', calificacion: 4 },
    { titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', calificacion: 5 },
    { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', calificacion: 4 },
    { titulo: 'Matar a un ruiseñor', autor: 'Harper Lee', calificacion: 5 }
  ];
  
function mostrarResumenLibros(libros) {
    libros.forEach(libro => {
      const resumen = `Título: ${libro.titulo}\nAutor: ${libro.autor}\nCalificación: ${libro.calificacion}/5\n`;
      console.log(resumen);
    });
}

mostrarResumenLibros(libros);