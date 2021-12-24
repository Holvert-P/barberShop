const nav_button = document.getElementById("nav__button"),
  nav_menu = document.querySelector(".nav__menu");

const $nav = document.querySelector(".hamburger");
nav_button.addEventListener("click", () => {
  nav_menu.classList.toggle("nav__menu--show");

  $nav.classList.toggle("is-active");
});

nav_button.addEventListener(
  "blur",
  () => {
    nav_menu.classList.remove("nav__menu--show");
    $nav.classList.remove("is-active");
  },
  true
);
