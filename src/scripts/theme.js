window.addEventListener("load", () => {
  const isDarkMode = localStorage.getItem("darkModeEnabled") === "true";
  const body = document.body;
  const darkModeButton = document.querySelector(".dark-mode-selector");
  const icon = darkModeButton.querySelector("i");

  // Função para atualizar o ícone do botão
  function updateDarkModeButtonIcon(isDarkMode) {
    icon.classList.toggle("fa-moon", !isDarkMode);
    icon.classList.toggle("fa-sun", isDarkMode);
  }

  // Inicializa o estado do dark mode e ícone do botão
  if (isDarkMode) {
    body.classList.add("dark-mode");
    updateDarkModeButtonIcon(true);
  } else {
    icon.classList.add("fa-moon");
  }

  // Evento de clique do botão para alternar o dark mode
  darkModeButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkModeEnabled", isDarkMode);
    updateDarkModeButtonIcon(isDarkMode);
  });
});
