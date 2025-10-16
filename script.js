const modeBtn = document.getElementById("modeBtn");
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeBtn.textContent =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});