// 1. Función para calcular el precio
function calcularPrecio(PrecioUnitario, cantidad) {
  return PrecioUnitario * cantidad;
}

// 2. Función para saber el estado de la reserva
function puedeReservar(cantidad) {
  if (cantidad <= 2) {
    return "disponible";
  } else {
    return "lleno";
  }
}

// Imprimiendo cálculos de precio
console.log("--- Precios ---");
console.log(calcularPrecio(5, 2)); // Imprime 10
console.log(calcularPrecio(3, 4)); // Imprime 12
console.log(calcularPrecio(7, 1)); // Imprime 7

// Imprimiendo el estado de las reservas
console.log("--- Estado de Reservas ---");
console.log(puedeReservar(3)); // Imprime "disponible"
console.log(puedeReservar(2)); // Imprime "lleno"
console.log(puedeReservar(1)); // Imprime "disponible"