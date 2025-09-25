// 9️⃣ Formularios y Validación Simple
// Archivos: src/ejercicio9.html y src/ejercicio9.js
// Crea un formulario simple y:

// Obtén valores de inputs con value
// Valida que los campos no estén vacíos
// Muestra mensajes de error o éxito

// Crear formulario y mensaje
document.addEventListener('DOMContentLoaded', function() {
  const form = document.createElement('form');
  form.innerHTML = `
    <input type="text" id="nombre" placeholder="Nombre"><br><br>
    <input type="email" id="correo" placeholder="Correo"><br><br>
    <button type="submit">Enviar</button>
  `;
  const mensaje = document.createElement('div');
  mensaje.style.marginTop = '15px';
  document.body.appendChild(form);
  document.body.appendChild(mensaje);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    if (!nombre || !correo) {
      mensaje.textContent = 'Por favor, completa todos los campos.';
      mensaje.style.color = 'red';
    } else {
      mensaje.textContent = '¡Formulario enviado correctamente!';
      mensaje.style.color = 'green';
    }
  });
});
