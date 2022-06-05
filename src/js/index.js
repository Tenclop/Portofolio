import "../sass/main.scss";
import lightMode from "./light-mode.js";
import animations from "./gsap.js";

/* nav */
const header = document.querySelector(".header");
const menu = document.querySelector(".header__menu");
const containerLinks = document.querySelector(".header__nav");
menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  header.classList.toggle("open");
  containerLinks.classList.toggle("open");
});

animations.gsapAnimation();
lightMode.functionalityLightMode();
