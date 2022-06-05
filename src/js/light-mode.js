import imgYellow from "../assets/Logo/yellow-logo.webp";
import imgGreen from "../assets/Logo/green-logo.webp";
const lightMode = {
  //change page colors
  functionalityLightMode: () => {
    let checkbox = document.querySelector("input[name=theme]");
    let htmlElement = document.documentElement;
    // const one = document.querySelector(".container--blobs__1");

    let logo = document.getElementById("img-logo");
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        smoothTrans();
        htmlElement.setAttribute("data-theme", "light");
        logo.src = `${imgYellow}`;
      } else {
        smoothTrans();
        htmlElement.setAttribute("data-theme", "dark");
        logo.src = `${imgGreen}`;
      }
    });

    let smoothTrans = () => {
      htmlElement.classList.add("transition");

      window.setTimeout(() => {
        htmlElement.classList.remove("transition");
      }, 1000);
    };
  },
};

export default lightMode;
