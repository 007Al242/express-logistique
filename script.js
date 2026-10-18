document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Ferme le menu mobile après le clic sur un lien.
  document.querySelectorAll("#mainNav .nav-link, #mainNav .btn").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mainNav");
      if (menu && menu.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Démonstration seulement : aucun service de suivi n'est connecté.
  const trackingForm = document.getElementById("trackingForm");
  const trackingMessage = document.getElementById("trackingMessage");
  if (trackingForm && trackingMessage) {
    trackingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const number = document.getElementById("trackingNumber").value.trim();
      trackingMessage.className = "alert alert-warning mt-3 mb-0";
      trackingMessage.textContent = `Le numéro « ${number} » a été saisi. Pour afficher un statut réel, connectez ce formulaire à votre base de données ou à l’API de votre transporteur.`;
    });
  }

  // Démonstration seulement : prépare un résumé local, sans envoyer de données.
  const quoteForm = document.getElementById("quoteForm");
  const quoteMessage = document.getElementById("quoteMessage");
  if (quoteForm && quoteMessage) {
    quoteForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!quoteForm.reportValidity()) return;
      const name = document.getElementById("fullName").value.trim();
      const service = document.getElementById("serviceType").value;
      const destination = document.getElementById("destination").value.trim();
      quoteMessage.className = "alert alert-success mb-0";
      quoteMessage.textContent = `Merci ${name} ! Votre demande de démonstration pour « ${service} » vers « ${destination} » est prête. Elle n’a pas été envoyée : ajoutez un backend ou un service de formulaire pour recevoir les demandes.`;
      quoteForm.reset();
    });
  }
});
