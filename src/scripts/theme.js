const darkModeButton = document.querySelector(".dark-mode-selector");
const body = document.body;
const darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

if (darkModeEnabled) {
  body.classList.add("dark-mode");
}

darkModeButton.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  localStorage.setItem("darkModeEnabled", body.classList.contains("dark-mode"));
});
