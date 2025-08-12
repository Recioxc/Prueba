// Maldrec Starter JS
// - Menú móvil accesible
// - Smooth scroll (nativo via CSS behavior: smooth en html)
// - Placeholder de envío de formulario

(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Inicializar EmailJS (reemplaza "PUBLIC_KEY" con tu clave pública)
  if (window.emailjs) {
    emailjs.init('PUBLIC_KEY');
  }

  const serviceID = 'SERVICE_ID';
  const templateID = 'TEMPLATE_ID';

  // Envío del formulario con validación básica
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = form.from_name.value.trim();
      const correo = form.reply_to.value.trim();
      const mensaje = form.message.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!nombre || !correo || !mensaje) {
        alert('Por favor completa todos los campos.');
        return;
      }

      if (!emailRegex.test(correo)) {
        alert('Ingresa un correo válido.');
        return;
      }

      emailjs.send(serviceID, templateID, {
        from_name: nombre,
        reply_to: correo,
        message: mensaje
      }).then(() => {
        alert('¡Gracias! Te contactaremos muy pronto.');
        form.reset();
      }).catch((err) => {
        console.error('Error al enviar', err);
        alert('Ocurrió un problema al enviar el mensaje.');
      });
    });
  }
})();
