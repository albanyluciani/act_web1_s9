// 2️⃣ Seleccionar Elementos por ID
// Archivos: src/ejercicio2.html y src/ejercicio2.js
// Crea una página con varios elementos que tengan ID y:

// Usa getElementById() para seleccionar elementos
// Cambia el texto de los elementos seleccionados
// Cambia el color de fondo de un elemento

const practicasDOM = document.getElementById("practicas");
const pruebasDOM = document.getElementById("pruebas");
const seleccionDOM = document.getElementById("seleccion");

// Cambiar el texto de los elementos seleccionados
practicasDOM.textContent = "Prácticas DOM Modificadas";
pruebasDOM.textContent = "Pruebas DOM Modificadas";
seleccionDOM.textContent = "Elemento Seleccionado Modificado";

// Cambiar el color de fondo de un elemento
pruebasDOM.style.backgroundColor = "#280397ff";
