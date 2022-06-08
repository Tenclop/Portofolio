import "../sass/main.scss";
import lightMode from "./light-mode.js";
import animations from "./gsap.js";
import { gsap, ScrollTrigger, ScrollToPlugin } from "gsap/all";

/* nav */
const header = document.querySelector(".header");
const menu = document.querySelector(".header__menu");
const containerLinks = document.querySelector(".header__nav");
const scrollLinks = document.querySelectorAll(".scroll-link");
const navbar = document.getElementById("nav");
const linksContainer = document.querySelector(".header__nav--links-container");
const test = document.querySelector(".pin-spacer");

animations.gsapAnimation();
lightMode.functionalityLightMode();

// ********** close links ************
menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  header.classList.toggle("open");
  containerLinks.classList.toggle("open");
});

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    //prevent default click
    e.preventDefault();

    menu.classList.toggle("open");
    header.classList.toggle("open");
    containerLinks.classList.toggle("open");
  });
});
