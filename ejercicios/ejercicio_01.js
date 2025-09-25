// 1️⃣ Información Básica del Documento
// Crea una página HTML simple que muestre:

// Título de la página usando document.title
// URL actual usando document.URL
// Mostrar la información en el div
const infoDiv = document.querySelector("div");
infoDiv.innerHTML = `<strong>Título:</strong> ${document.title}<br><strong>URL:</strong> ${document.URL}`;
