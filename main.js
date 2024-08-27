const hamurgerMenuContainerEl = document.querySelector(
    ".hamurgerMenuContainer"
  ),
  asideEl = document.querySelector("aside");

hamurgerMenuContainerEl.addEventListener("click", () => {
  asideEl.classList.toggle("active");
});
