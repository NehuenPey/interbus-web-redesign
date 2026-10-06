const contactForm = document.getElementById("contactForm");

const formError = document.getElementById("formError");

const formSuccess = document.getElementById("formSuccess");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Limpiar mensajes anteriores
    formError.textContent = "";
    formSuccess.textContent = "";

    formError.classList.remove("visible");
    formSuccess.classList.remove("visible");

    // Obtener datos
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const message = document.getElementById("message").value.trim();

    // Nombre y mensaje son obligatorios
    if (!name || !message) {
      formError.textContent =
        "Completá los campos obligatorios antes de enviar la consulta.";

      formError.classList.add("visible");

      return;
    }

    // Debe existir email o teléfono
    if (!email && !phone) {
      formError.textContent =
        "Ingresá una dirección de email o un número de teléfono para que podamos contactarte.";

      formError.classList.add("visible");

      return;
    }

    // Validar formato del email si fue ingresado
    if (email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        formError.textContent = "Ingresá una dirección de email válida.";

        formError.classList.add("visible");

        return;
      }
    }

    /* =====================================================
       ENVÍO DEL FORMULARIO
    ===================================================== */

    // Buscar botón de envío
    const submitButton = contactForm.querySelector(
      'button[type="submit"], input[type="submit"]',
    );

    const originalButtonText = submitButton
      ? submitButton.textContent
      : "Enviar mensaje";

    // Cambiar estado del botón
    if (submitButton) {
      submitButton.disabled = true;

      submitButton.textContent = "Enviando...";
    }

    // Crear los datos del formulario
    const formData = new FormData(contactForm);

    // Configuración de FormSubmit
    formData.append("_subject", "Nuevo mensaje desde la web de Interbus");

    formData.append("_template", "table");

    // Protección contra spam
    formData.append("_captcha", "true");

    // Campo honeypot
    formData.append("_honey", "");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/nehuenskate@gmail.com",
        {
          method: "POST",

          headers: {
            Accept: "application/json",
          },

          body: formData,
        },
      );

      const data = await response.json().catch(() => ({}));

      // Comprobar respuesta
      if (!response.ok || data.success === false) {
        throw new Error(data.message || "No se pudo enviar el mensaje.");
      }

      /* ===================================================
         ENVÍO CORRECTO
      =================================================== */

      formSuccess.textContent =
        "Tu consulta fue enviada correctamente. Gracias por comunicarte con Interbus.";

      formSuccess.classList.add("visible");

      // Limpiar formulario
      contactForm.reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);

      formError.textContent =
        "No pudimos enviar tu consulta. Intentá nuevamente en unos minutos.";

      formError.classList.add("visible");
    } finally {
      // Restaurar botón
      if (submitButton) {
        submitButton.disabled = false;

        submitButton.textContent = originalButtonText || "Enviar mensaje";
      }
    }
  });
}

/* =========================================================
   MODAL: POLÍTICA DE PRIVACIDAD
========================================================= */

const privacyModal = document.getElementById("privacyModal");

const openPrivacy = document.getElementById("openPrivacy");

if (privacyModal && openPrivacy) {
  // Abrir
  openPrivacy.addEventListener("click", () => {
    privacyModal.showModal();

    document.body.classList.add("modal-open");

    privacyModal.querySelector(".modal-body").scrollTop = 0;
  });

  // Cerrar con los botones (X y "Entendido")
  privacyModal.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      privacyModal.close();
    });
  });

  // Cerrar al hacer clic fuera del contenido
  privacyModal.addEventListener("click", (event) => {
    if (event.target === privacyModal) {
      privacyModal.close();
    }
  });

  // Se dispara al cerrar, incluso con la tecla Esc
  privacyModal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");

    openPrivacy.focus();
  });
}
