// script.js
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  status.textContent = '';
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const reason = document.getElementById('reason').value.trim();
  const message = document.getElementById('message').value.trim();

  // validación simple
  if (!name || !email || !reason || !message) {
    status.style.color = 'red';
    status.textContent = 'Por favor completa todos los campos.';
    return;
  }

  // valida formato básico de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    status.style.color = 'red';
    status.textContent = 'Escribe un correo válido.';
    return;
  }

  // Si usas Formspree o similar, aquí podrías enviar la petición fetch al endpoint.
  // Por ahora mostramos mensaje de éxito y limpiamos el formulario.
  status.style.color = 'green';
  status.textContent = 'Mensaje enviado correctamente (simulado). Si deseas recibir emails, configura Formspree o Netlify Forms.';
  form.reset();

  // ejemplo: enviar a Formspree (descomenta y reemplaza ACTION_URL si usas Formspree)
  /*
  fetch('https://formspree.io/f/tu_codigo', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new FormData(form)
  }).then(response => {
    if (response.ok) {
      status.style.color = 'green';
      status.textContent = 'Mensaje enviado correctamente.';
      form.reset();
    } else {
      status.style.color = 'red';
      status.textContent = 'Hubo un error al enviar. Intenta más tarde.';
    }
  }).catch(()=> {
    status.style.color = 'red';
    status.textContent = 'Error de conexión.';
  });
  */
});