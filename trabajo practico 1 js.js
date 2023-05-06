class Producto {
  constructor(nombre, descripcion, precio, stock) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
    this.mejoraAplicada = false;
  }
  mejora() {
    this.precio = this.precio + this.precio * 0.35;
    this.mejoraAplicada = true;
  }
  mejoraMagica(porcentaje) {
    this.precio = this.precio + this.precio * porcentaje;
  }
}
let continuar = true;
while (continuar) {
  const nombreProducto = prompt("ingrese nombre del producto");
  const descripcionProducto = prompt("ingrese la descripcion del producto");
  const precioProducto = parseFloat(prompt("ingrese precio del producto"));
  const stockProducto = parseInt(prompt("ingrese stock del producto"));
  const producto = new Producto(
    nombreProducto,
    descripcionProducto,
    precioProducto,
    stockProducto
  );
  alert(
    "Nombre: " +
      producto.nombre +
      " Descripcion: " +
      producto.descripcion +
      " Precio: " +
      producto.precio +
      " Stock: " +
      producto.stock
  );
  const mejora = confirm("Quiere mejorar su objeto?");
  if (mejora == true) {
    producto.mejora();
    alert(
      "Nombre: " +
        producto.nombre +
        " Descripcion: " +
        producto.descripcion +
        " Precio: " +
        producto.precio +
        " Stock: " +
        producto.stock
    );
  }
  continuar = confirm("Quiero seguir cargando productos");
}
