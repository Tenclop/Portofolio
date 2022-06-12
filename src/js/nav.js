const navigation = {
  nav: () => {
    /* nav */
    const header = document.querySelector(".header");
    const menu = document.querySelector(".header__menu");
    const containerLinks = document.querySelector(".header__nav");
    const scrollLinks = document.querySelectorAll(".scroll-link");

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
  },
};

export default navigation;
