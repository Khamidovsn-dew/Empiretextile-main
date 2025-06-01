const langBtn = document.getElementById("lang-btn");
const langMenu = document.getElementById("lang-menu");

langBtn.addEventListener("click", () => {
  langMenu.style.display =
    langMenu.style.display === "block" ? "none" : "block";
});

langMenu.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    langBtn.textContent = item.textContent + " ▾";
    langMenu.style.display = "none";
    // TODO: handle actual language switching here
  });
});
