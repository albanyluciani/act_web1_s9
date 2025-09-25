// 6️⃣ Agregar y Quitar Clases CSS

const contenedor = document.getElementById("contenedor");
const btnAgregar = document.getElementById("btnAgregar");
const btnQuitar = document.getElementById("btnQuitar");
const btnAlternar = document.getElementById("btnAlternar");

btnAgregar.addEventListener("click", () => {
  contenedor.classList.add("resaltado");
});

btnQuitar.addEventListener("click", () => {
  contenedor.classList.remove("resaltado");
});

btnAlternar.addEventListener("click", () => {
  contenedor.classList.toggle("resaltado");
});
