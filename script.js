// Sélection des éléments DOM nécessaires pour le fonctionnement de la page
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Événement : Lorsque la souris survole le bouton "Non", il se déplace aléatoirement
noBtn.addEventListener("mouseover", () => {
  // Générer une position X aléatoire dans la largeur du conteneur
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  // Générer une position Y aléatoire dans la hauteur du conteneur
  const newY = Math.floor(Math.random() * questionContainer.offsetHeight);

  // Appliquer la nouvelle position X au bouton
  noBtn.style.left = `${newX}px`;
  // Appliquer la nouvelle position Y au bouton
  noBtn.style.top = `${newY}px`;
});

// Événement : Lorsque l'utilisateur clique sur le bouton "Oui"
yesBtn.addEventListener("click", () => {
  // Masquer le conteneur de la question
  questionContainer.style.display = "none";
  // Afficher l'animation du cœur (loader)
  heartLoader.style.display = "inherit";

  // Attendre 3 secondes avant d'afficher le résultat
  const timeoutId = setTimeout(() => {
    // Masquer le loader
    heartLoader.style.display = "none";
    // Afficher le conteneur de résultat
    resultContainer.style.display = "inherit";
    // Lancer la vidéo de résultat
    gifResult.play();
  }, 3000);
});