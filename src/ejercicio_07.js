// 7️⃣ Crear y Agregar Elementos
// Archivos: src/ejercicio7.html y src/ejercicio7.js
// Crea nuevos elementos dinámicamente:

// Usa createElement() para crear elementos
// Usa appendChild() para agregarlos al DOM
// Crea una lista de elementos con un botón

const boton = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

boton.addEventListener("click", function () {
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = "Elemento Agregado";
  lista.appendChild(nuevoElemento);
});
