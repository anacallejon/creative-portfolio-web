# CONFIGURACIÓN DEL FORMULARIO DE CONTACTO

## 📧 Cómo hacer que el formulario envíe emails a tu correo

He configurado el formulario para usar **Formspree**, un servicio gratuito que permite recibir emails desde formularios HTML sin necesidad de programar un backend.

### Pasos para configurar:

1. **Ve a Formspree:**
   - Entra en: https://formspree.io/
2. **Crea una cuenta gratuita:**

   - Regístrate con tu email (ana.callejonalen@gmail.com)
   - Verifica tu cuenta desde el email que te llegue

3. **Crea un nuevo formulario:**

   - Click en "New Form"
   - Dale un nombre (por ejemplo: "Portfolio Contact Form")
   - Te darán un ID único como: `xwpkabcd`

4. **Actualiza tus archivos HTML:**

   - En `index.html`, `projects.html` y `about.html`
   - Busca esta línea:

   ```html
   <form
     class="contact-form"
     action="https://formspree.io/f/YOUR_FORM_ID"
     method="POST"
   ></form>
   ```

   - Reemplaza `YOUR_FORM_ID` por tu ID real:

   ```html
   <form
     class="contact-form"
     action="https://formspree.io/f/xwpkabcd"
     method="POST"
   ></form>
   ```

5. **¡Listo!**
   - Cuando alguien envíe el formulario, recibirás un email en ana.callejonalen@gmail.com
   - El plan gratuito permite 50 emails al mes

### Características:

✅ Completamente gratis (hasta 50 envíos/mes)
✅ Sin necesidad de backend o servidor
✅ Protección anti-spam incluida
✅ Notificaciones instantáneas por email
✅ Puedes ver todos los mensajes en el dashboard de Formspree

---

## 🔗 Enlaces de Redes Sociales

He convertido los iconos y textos de redes sociales en enlaces clicables.

### Para personalizar las URLs:

En los tres archivos HTML (`index.html`, `projects.html`, `about.html`), actualiza estas líneas con tus perfiles reales:

**Instagram:**

```html
<a
  href="https://instagram.com/tu_usuario_real"
  target="_blank"
  rel="noopener noreferrer"
  class="social-item"
></a>
```

**LinkedIn:**

```html
<a
  href="https://linkedin.com/in/tu-perfil-real"
  target="_blank"
  rel="noopener noreferrer"
  class="social-item"
></a>
```

Reemplaza:

- `ana.callejon` por tu usuario real de Instagram
- `ana-callejon` por tu username real de LinkedIn

Los enlaces se abren en una nueva pestaña (`target="_blank"`) y tienen hover effect (se mueven ligeramente a la derecha cuando pasas el ratón).

---

## 🎨 Añadir Iconos de Redes Sociales

Para añadir los iconos visuales de Instagram y LinkedIn:

1. Descarga o crea iconos (PNG o SVG) para Instagram y LinkedIn
2. Guárdalos en tu carpeta `assets/img/`
3. En los HTML, descomenta y actualiza estas líneas:

```html
<!-- Instagram -->
<div class="social-icon">
  <img src="assets/img/instagram-icon.png" alt="Instagram" />
</div>

<!-- LinkedIn -->
<div class="social-icon">
  <img src="assets/img/linkedin-icon.png" alt="LinkedIn" />
</div>
```

Los cuadrados grises actuales (50x50px) desaparecerán automáticamente cuando añadas las imágenes.
