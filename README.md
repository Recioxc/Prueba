# Prueba

Sitio de ejemplo con formulario de contacto.

## Configuración de EmailJS

El formulario está conectado con [EmailJS](https://www.emailjs.com/).
Para que funcione, reemplaza los valores de ejemplo en
`assets/js/scripts.js`:

1. `PUBLIC_KEY` – tu **Public Key** de EmailJS.
2. `SERVICE_ID` – el ID del servicio creado en EmailJS.
3. `TEMPLATE_ID` – el ID de la plantilla usada para el mensaje.

```js
emailjs.init('PUBLIC_KEY');
const serviceID = 'SERVICE_ID';
const templateID = 'TEMPLATE_ID';
```

## ¿Usas Netlify?

Si despliegas el sitio en Netlify puedes eliminar EmailJS y usar
Netlify Forms:

1. Quita los scripts de EmailJS en `index.html`.
2. Añade `data-netlify="true"` y un campo oculto `form-name` al `<form>`.

Consulta la [documentación de Netlify Forms](https://docs.netlify.com/forms/setup/).
