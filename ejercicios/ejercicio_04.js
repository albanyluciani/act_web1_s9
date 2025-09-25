// 4️⃣ Cambiar Contenido de Elementos
// Archivos: src/ejercicio4.html y src/ejercicio4.js
// Crea elementos con texto y:

// Usa textContent para cambiar el texto
// Usa innerHTML para agregar HTML
// Crea un botón que cambie el contenido al hacer clic

const mensaje = document.getElementById("mensaje");
const descripcion = document.getElementById("descripcion");

// Leer contenido de texto
console.log(mensaje.textContent); // "Hola mundo ¡Bienvenido!"
console.log(descripcion.textContent); // "¡Vamos a comenzar a practicas!"

// Modificar contenido de texto
descripcion.textContent = "La descripción fue modificada";
mensaje.textContent = "Este es un mensaje nuevo";

const contenedor = document.getElementById("contenedor");
const lista = document.getElementById("lista");

// Leer HTML interno
console.log(contenedor.innerHTML); // "<p>Contenido original</p>"

// Reemplazar HTML completo
contenedor.innerHTML = `
    <h2>Nuevo Título</h2>
    <p>Nuevo párrafo con <strong>texto en negrita</strong></p>
    <button onclick="alert('¡Hola!')">Hacer clic</button>
`;

// Agregar HTML al existente
lista.innerHTML += "<li>Nuevo Producto 4</li>";
