# 📜 INSTRUCCIONES: SCROLLYTELLING EFFECTS

## ¿Qué es Scrollytelling?

Scrollytelling combina el scroll con storytelling para crear experiencias narrativas interactivas. Los elementos aparecen, se animan y se transforman mientras el usuario hace scroll, creando una experiencia más envolvente.

---

## ✅ TODO YA ESTÁ INTEGRADO

El código de scrollytelling ya está integrado en tus archivos existentes:

- ✅ **main.js** → Contiene toda la lógica de scrollytelling
- ✅ **components.css** → Contiene todos los estilos de animaciones
- ✅ **index.html** → Ya tiene las clases necesarias añadidas

**No necesitas archivos separados.** Solo reemplaza estos tres archivos.

---

## 🎯 Efectos implementados en tu Home Page:

### 1. **Scroll Progress Bar**

- Barra de progreso en la parte superior que se llena mientras haces scroll
- Color degradado rosa a azul (#cc1753 → #8b93bc)
- Se actualiza en tiempo real

### 2. **Scroll Hint**

- Indicador "↓ Scroll to explore ↓" en la parte inferior
- Desaparece automáticamente después de hacer scroll
- Animación de rebote sutil

### 3. **Fade In Elements**

- Todas las secciones aparecen con fade-in al entrar en viewport
- Incluye un pequeño desplazamiento hacia arriba (30px)
- Transición suave de 0.8s

### 4. **Section Titles - Slide from Left**

- Los títulos de sección se deslizan desde la izquierda
- Aparecen cuando entran en viewport

### 5. **Carousel Items - Stagger Animation**

- Las imágenes del carrusel aparecen en secuencia
- Efecto de stagger con 50ms de delay entre cada imagen
- Scale animation (de 0.9 a 1)

### 6. **About Section - Scale In**

- La sección "About Me" aparece con un efecto de escala
- Transición suave de 0.8s
- El texto aparece completo como un bloque

### 7. **Contact Box - Float from Bottom**

- La caja de contacto flota desde abajo
- Easing especial (cubic-bezier) para movimiento más natural

---

## 📁 Archivos actualizados:

1. **main.js** → Código de scrollytelling integrado al final
2. **components.css** → Estilos de scrollytelling añadidos al final
3. **index.html** → Clases añadidas a las secciones

**No hay archivos nuevos.** Solo reemplaza los archivos existentes.

---

## 🔧 Cómo implementar:

### Paso 1: Reemplazar archivos

- Reemplaza tu `main.js` actual en `assets/js/main.js`
- Reemplaza tu `components.css` actual en `assets/css/components.css`
- Reemplaza tu `index.html` actual

### Paso 2: ¡Listo!

- Abre tu `index.html` en el navegador
- Haz scroll y disfruta los efectos

**Es así de simple.** Todo está integrado en los archivos que ya tenías.

---

## 🎨 Personalización:

### Cambiar velocidades de animación:

En `components.css`, busca al final del archivo las propiedades `transition`:

```css
.fade-in-scroll {
  transition: opacity 0.8s ease, transform 0.8s ease;
  /* Cambia 0.8s por el tiempo que quieras */
}
```

### Cambiar el threshold (cuándo se activa):

En `main.js`, busca al final del archivo `observerOptions`:

```javascript
const observerOptions = {
  threshold: 0.15, // Cambia este valor (0 a 1)
  rootMargin: "0px 0px -100px 0px",
};
```

- `threshold: 0.15` = Se activa cuando el 15% del elemento es visible
- `threshold: 0.5` = Se activa cuando el 50% del elemento es visible

### Añadir efectos a otros elementos:

Solo añade la clase correspondiente en el HTML:

```html
<!-- Fade in -->
<div class="fade-in-scroll">Tu contenido</div>

<!-- Slide from left -->
<h2 class="slide-in-left">Título</h2>

<!-- Scale in -->
<section class="scale-in">Sección</section>

<!-- Float from bottom -->
<div class="float-in-bottom">Caja</div>
```

---

## 📱 Optimización Móvil:

Los efectos están optimizados para móvil:

- Animaciones más rápidas (0.4s en vez de 0.8s)
- Scroll hint oculto
- Word fade desactivado (mejor rendimiento)
- Parallax desactivado

---

## ⚡ Rendimiento:

- Usa **Intersection Observer API** (nativo del navegador, muy eficiente)
- Las animaciones son CSS (aceleradas por GPU)
- No usa librerías externas
- Optimizado para móviles y tablets

---

## 🔮 Efectos adicionales disponibles (para usar en el futuro):

Ya están en el CSS, solo necesitas añadir las clases:

- `.blur-fade-in` → Aparece desde blur
- `.rotate-fade-in` → Aparece rotando ligeramente
- `.reveal-animation` → Efecto de cortina revelando
- `.glow-on-scroll` → Brillo al hacer scroll
- `.counter` → Contador animado (para números)

---

## 🐛 Troubleshooting:

**Problema:** Los efectos no funcionan

- ✅ Verifica que hayas reemplazado main.js, components.css e index.html
- ✅ Abre la consola del navegador (F12) y busca errores
- ✅ Limpia la caché del navegador (Ctrl+Shift+R)

**Problema:** Los efectos van muy rápido/lento

- ✅ Ajusta los valores de `transition-duration` al final de components.css

**Problema:** Algunos elementos no aparecen

- ✅ Verifica que tengan la clase correspondiente en index.html (ej: `fade-in-scroll`)
- ✅ Comprueba que el JavaScript se esté ejecutando (consola del navegador)

---

## 💡 Próximos pasos:

Si quieres añadir scrollytelling a **projects.html** y **about.html**:

1. El código ya está en main.js y components.css (se carga en todas las páginas)
2. Solo añade las clases a los elementos que quieras animar
3. El JavaScript ya funcionará automáticamente

Por ejemplo, en projects.html:

```html
<section class="cards-section fade-in-scroll">
  <!-- tu contenido -->
</section>
```

¡Disfruta de tu portfolio con efectos scrollytelling! 🚀
