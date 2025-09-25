// 5️⃣ Modificar Atributos
// Archivos: src/ejercicio5.html y src/ejercicio5.js
// Crea elementos con atributos y:

// Usa getAttribute() para leer atributos
// Usa setAttribute() para cambiar atributos
// Cambia el src de una imagen y el href de un enlace

// Obtener los elementos por ID
const imagen = document.getElementById("imagen");
const enlace = document.getElementById("enlace");

// getAttribute() - Obtener atributo
console.log(imagen.getAttribute("src"));
console.log(enlace.getAttribute("href"));

// setAttribute() - Establecer atributo
imagen.setAttribute(
  "src",
  "https://lasnegras.com.co/wp-content/uploads/2025/01/Torta-Choco-brownie2.jpg"
);
imagen.setAttribute("alt", "la favorita");
enlace.setAttribute("href", "https://lasnegras.com.co/");
enlace.setAttribute("target", "_blank");
