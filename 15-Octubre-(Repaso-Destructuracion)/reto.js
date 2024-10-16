class Producto {
    constructor(nombre, precio, disponible) {
      this.nombre = nombre;
      this.precio = precio;
      this.disponible = disponible;
    }
}
  
class Inventario {
    constructor() {
      this.productos = [];
}
  
agregarProducto(nombre, precio, disponible) {
      const nuevoProducto = new Producto(nombre, precio, disponible);
      this.productos.push(nuevoProducto);
}
  
mostrarProductosDisponibles() {
      const productosDisponibles = this.productos.filter(producto => producto.disponible);
      
      if (productosDisponibles.length === 0) {
        console.log("No hay productos disponibles.");
      } else {
        console.log("Productos disponibles en stock:");
        productosDisponibles.forEach(producto => {
          console.log(`Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
        });
      }
}
  
aplicarDescuento(porcentaje) {
      this.productos.forEach(producto => {
        if (producto.disponible) {
          producto.precio -= producto.precio * (porcentaje / 100);
        }
      });
      console.log(`Descuento del ${porcentaje}% aplicado a los productos disponibles.`);
    }
}
  
const inventario = new Inventario();
  
inventario.agregarProducto('Camiseta', 25.00, true);
inventario.agregarProducto('Pantalones', 50.00, false);
inventario.agregarProducto('Zapatos', 75.00, true);
  
inventario.mostrarProductosDisponibles();
  
inventario.aplicarDescuento(10);
  
inventario.mostrarProductosDisponibles();