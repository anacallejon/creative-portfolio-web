// JS principal para cursor personalizado, modales y navbar About
document.addEventListener("DOMContentLoaded", () => {
  // ==============================
  // CUSTOM CURSOR
  // ==============================
  const cursor = document.querySelector(".custom-cursor");

  if (cursor) {
    const COLOR1 = "rgb(178, 193, 237)"; // #b2c1ed
    const COLOR2 = "rgb(139, 147, 188)"; // #8b93bc

    // Mover el cursor y cambiar color según el fondo
    document.addEventListener("mousemove", (e) => {
      cursor.style.opacity = "1";
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;

      // Truco: ocultar el cursor para poder "ver" lo que hay debajo
      cursor.style.visibility = "hidden";
      const el = document.elementFromPoint(e.clientX, e.clientY);
      cursor.style.visibility = "visible";

      if (!el) return;

      // Si estamos sobre un link/botón y quieres mantener el efecto .is-link,
      // NO cambiamos colores aquí
      if (cursor.classList.contains("is-link")) {
        return;
      }

      // Leer color de fondo real del elemento (subiendo por los padres si es transparente)
      let node = el;
      let bgColor = "rgba(0, 0, 0, 0)";

      while (node && node !== document.documentElement) {
        const computed = window.getComputedStyle(node);
        bgColor = computed.backgroundColor;

        if (bgColor !== "rgba(0, 0, 0, 0)" && bgColor !== "transparent") {
          break;
        }
        node = node.parentElement;
      }

      // Cambiar color del cursor según el fondo
      if (bgColor === COLOR1) {
        // si el fondo es #b2c1ed → cursor pasa a #8b93bc
        cursor.style.backgroundColor = COLOR2;
        cursor.style.borderColor = COLOR2;
      } else if (bgColor === COLOR2) {
        // si el fondo es #8b93bc → cursor pasa a #b2c1ed
        cursor.style.backgroundColor = COLOR1;
        cursor.style.borderColor = COLOR1;
      } else {
        // en cualquier otro fondo: color base
        cursor.style.backgroundColor = COLOR1;
        cursor.style.borderColor = COLOR1;
      }
    });

    // Ocultar cursor al salir de la ventana
    document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0";
    });

    // Hover en enlaces/botones → mantiene tu efecto "is-link"
    const interactive = document.querySelectorAll("a, button");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("is-link"));
      el.addEventListener("mouseleave", () =>
        cursor.classList.remove("is-link")
      );
    });
  }

  // ==============================
  // MODAL DE PROYECTOS (projects.html)
  // ==============================
  if (document.body.classList.contains("projects-page")) {
    const cards = document.querySelectorAll(".card");
    const backdrop = document.querySelector(".project-modal-backdrop");
    const modalText = document.querySelector(".project-modal-text");
    const modalImages = document.querySelector(".project-modal-images");

    // Solo si existen todos los elementos necesarios
    if (backdrop && cards.length > 0 && modalText && modalImages) {
      // Abrir modal al hacer click en cada card
      cards.forEach((card) => {
        card.addEventListener("click", () => {
          const projectId = card.getAttribute("data-project");
          const detail = projectId ? document.getElementById(projectId) : null;

          // Reset contenido de texto
          modalText.innerHTML = "";

          // Texto largo desde bloque oculto o fallback desde la card
          if (detail) {
            const detailTitle = detail.querySelector("h3");
            const detailText = detail.querySelector("p");
            if (detailTitle) modalText.appendChild(detailTitle.cloneNode(true));
            if (detailText) modalText.appendChild(detailText.cloneNode(true));
          } else {
            const titleEl = card.querySelector(".card-title");
            const textEl = card.querySelector(".card-text");
            if (titleEl) modalText.appendChild(titleEl.cloneNode(true));
            if (textEl) modalText.appendChild(textEl.cloneNode(true));
          }

          // Imágenes del proyecto
          modalImages.innerHTML = "";
          const dataImages = card.getAttribute("data-images");
          const imgEl = card.querySelector(".card-img");
          let sources = [];

          if (dataImages && dataImages.trim() !== "") {
            sources = dataImages.split(",").map((s) => s.trim());
          } else if (imgEl && imgEl.src) {
            sources = [imgEl.src];
          }

          sources.forEach((src) => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "";
            modalImages.appendChild(img);
          });

          // Mostrar modal + bloquear scroll de fondo
          backdrop.classList.add("is-open");
          document.body.classList.add("modal-open");
        });
      });

      // Cerrar modal haciendo click en el fondo oscuro
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
          backdrop.classList.remove("is-open");
          document.body.classList.remove("modal-open");
        }
      });
    }
  }

  // ==============================
  // NAVBAR ABOUT: APARICIÓN DE LOGO AL SCROLL
  // ==============================
  const aboutNavbar = document.querySelector(".navbar-about");
  const introSection = document.querySelector(".intro-section");

  // Solo ejecutar en about.html (cuando existe la combinación)
  if (aboutNavbar && introSection) {
    window.addEventListener("scroll", () => {
      const introTop = introSection.getBoundingClientRect().top;

      /*
        Si el borde superior de intro-section está
        en el borde superior del viewport (o ha subido ya),
        activamos la versión con logo (.scrolled).
      */
      if (introTop <= 0) {
        aboutNavbar.classList.add("scrolled");
      } else {
        aboutNavbar.classList.remove("scrolled");
      }
    });
  }

  // Forzar que la página siempre cargue arriba del todo
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".nav-overlay");

  if (navToggle && navLinks && overlay) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("nav-open");
      navToggle.classList.toggle("nav-open", isOpen);
      document.body.classList.toggle("nav-open", isOpen);
      overlay.classList.toggle("nav-open", isOpen);
    });

    // Cerrar al hacer click en un enlace
    navLinks.addEventListener("click", (event) => {
      if (event.target.tagName.toLowerCase() === "a") {
        navLinks.classList.remove("nav-open");
        navToggle.classList.remove("nav-open");
        document.body.classList.remove("nav-open");
        overlay.classList.remove("nav-open");
      }
    });

    // Cerrar al hacer click en el overlay
    overlay.addEventListener("click", () => {
      navLinks.classList.remove("nav-open");
      navToggle.classList.remove("nav-open");
      document.body.classList.remove("nav-open");
      overlay.classList.remove("nav-open");
    });
  }
});
