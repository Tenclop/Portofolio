import gsap from "gsap";

const animations = {
  //gsap
  gsapAnimation: () => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
      },
    });

    //arrow movement
    let arrow = document.querySelector(".arrow");

    if (arrow) {
      gsap.to(arrow, { y: 12, ease: "power1.inOut", repeat: -1, yoyo: true });
    }
  },
};

export default animations;
