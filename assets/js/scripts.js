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

  // Demo de envío de formulario (reemplazar por integración real)
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Gracias! Te contactaremos muy pronto.');
      form.reset();
    });
  }
})();
