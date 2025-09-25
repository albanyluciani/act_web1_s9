// 🔟 Navegación entre Elementos
// Archivos: src/ejercicio10.html y src/ejercicio10.js
// Crea una estructura HTML y demuestra:

// Usa parentElement para acceder al elemento padre
// Usa children para acceder a elementos hijos
// Usa nextElementSibling para el siguiente hermano
// Muestra la información de navegación en la página

document.addEventListener('DOMContentLoaded', function() {
  // Crear estructura
  const contenedor = document.createElement('div');
  contenedor.innerHTML = `
    <ul id="familia">
      <li id="padre">Padre
        <ul>
          <li id="hijo1">Hijo 1</li>
          <li id="hijo2">Hijo 2</li>
        </ul>
      </li>
      <li id="tio">Tío</li>
    </ul>
  `;
  document.body.appendChild(contenedor);

  // Navegación
  const hijo1 = document.getElementById('hijo1');
  const padre = hijo1.parentElement.parentElement; // <li id="padre">
  const ulHijos = hijo1.parentElement; // <ul> de hijos
  const siguienteHermano = hijo1.nextElementSibling; // Hijo 2

  const info = document.createElement('div');
  info.innerHTML = `
    <strong>Padre de Hijo 1:</strong> ${padre.id}<br>
    <strong>Hijos de Padre:</strong> ${ulHijos.children[0].textContent}, ${ulHijos.children[1].textContent}<br>
    <strong>Siguiente hermano de Hijo 1:</strong> ${siguienteHermano.textContent}
  `;
  document.body.appendChild(info);
});
