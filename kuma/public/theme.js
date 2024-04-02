// Fonction pour détecter les préférences de thème de l'utilisateur
function detectPreferredTheme() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

// Fonction pour activer le thème sombre
function activateDarkMode() {
  document.documentElement.setAttribute("data-theme", "dark");
}

// Fonction pour activer le thème clair
function activateLightMode() {
  document.documentElement.setAttribute("data-theme", "light");
}

// Fonction pour basculer entre les thèmes sombre et clair
function toggleTheme() {
  if (detectPreferredTheme()) {
    activateLightMode(); // Si le thème préféré de l'utilisateur est sombre, basculer vers le thème clair
  } else {
    activateDarkMode(); // Sinon, basculer vers le thème sombre
  }
}

// Appel de la fonction pour basculer le thème lorsque la page est chargée
toggleTheme();

// Ajouter un écouteur d'événement pour basculer le thème lorsque l'utilisateur clique sur un bouton ou effectue une action
document
  .getElementById("theme-toggle-button")
  .addEventListener("click", toggleTheme);
