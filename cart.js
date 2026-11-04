// Carrito de la librería. Calcula el total de la compra.

function calcularTotal(subtotal) {
  // ERROR INTENCIONAL: multiplicar por un texto da NaN
  return subtotal * 0.9;
}

function mostrarTotal() {
  var subtotal = Number(document.getElementById("subtotal").value) || 0;
  var total = calcularTotal(subtotal);
  document.getElementById("resultado").textContent = total.toFixed(2);
}
