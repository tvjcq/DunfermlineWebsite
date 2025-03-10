document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Show/hide button based on scroll position
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";
      } else {
        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";
      }
    });
  }

  // Gestion de l'envoi du formulaire de contact
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (contactForm.checkValidity()) {
        // Remplacer le formulaire par le message de confirmation
        contactForm.innerHTML = `
          <div style="text-align: center;">
            <div style="font-size: 50px; color: var(--primary-color);">
              &#10003;
            </div>
            <p style="font-size: 1.2rem; color: var(--font-color);">
              Your message has been sent successfully!
            </p>
          </div>
        `;
      }
    });
  }
});
