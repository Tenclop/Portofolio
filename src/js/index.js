import "../sass/main.scss";
import lightMode from "./light-mode.js";
import animations from "./gsap.js";
import tagCloud from "./tagcloud.js";
import navigation from "./nav.js";
import projectContent from "./projectSectionContent.js";

animations.gsapAnimation();
navigation.nav();
lightMode.functionalityLightMode();
tagCloud.cloud();
projectContent.section();
