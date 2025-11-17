document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".altum-header");
  const toggle = document.querySelector(".altum-header__toggle");

  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    header.classList.toggle("altum-header--nav-open");
  });
});
