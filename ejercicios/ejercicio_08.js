// 8️⃣ Eventos Básicos
// Archivos: src/ejercicio8.html y src/ejercicio8.js
// Crea elementos interactivos:

// Usa addEventListener() para eventos de click
// Maneja eventos de mouseover y mouseout
// Cambia elementos cuando ocurran los eventos

// Crear un botón y un div
const btn = document.createElement('button');
btn.textContent = 'Haz clic o pasa el mouse';
btn.style.margin = '20px';

const caja = document.createElement('div');
caja.textContent = 'Pasa el mouse por aquí';
caja.style.width = '200px';
caja.style.height = '60px';
caja.style.background = '#bde0fe';
caja.style.display = 'flex';
caja.style.alignItems = 'center';
caja.style.justifyContent = 'center';
caja.style.margin = '20px';
caja.style.transition = 'background 0.3s';

document.body.appendChild(btn);
document.body.appendChild(caja);

btn.addEventListener('click', function() {
  btn.textContent = '¡Clic detectado!';
});

caja.addEventListener('mouseover', function() {
  caja.style.background = '#ffb4a2';
  caja.textContent = 'Mouse sobre la caja';
});
caja.addEventListener('mouseout', function() {
  caja.style.background = '#bde0fe';
  caja.textContent = 'Pasa el mouse por aquí';
});
