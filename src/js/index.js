import "../sass/main.scss";
import lightMode from "./light-mode.js";
import animations from "./gsap.js";
import tagCloud from "./tagcloud.js";
import navigation from "./nav.js";

animations.gsapAnimation();
navigation.nav();
lightMode.functionalityLightMode();
tagCloud.cloud();
