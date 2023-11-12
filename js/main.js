function contentLoaded() {
  // HEADER
  const mobileToggle = document.querySelector(".nav__mobile-menu-icon");
  const navMenu = document.querySelector(".nav__links");

  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
