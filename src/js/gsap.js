import { gsap, ScrollTrigger, ScrollToPlugin } from "gsap/all";

const animations = {
  //gsap
  gsapAnimation: () => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
    let sections = gsap.utils.toArray(".panel");

    //arrow movement
    let arrow = document.querySelector(".arrow");

    if (arrow) {
      gsap.to(arrow, { y: 12, ease: "power1.inOut", repeat: -1, yoyo: true });
    }

    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    /* Main navigation */
    let panelsSection = sections,
      panelsContainer = document.querySelector(".container"),
      tween,
      getPosition;
    document.querySelectorAll(".move").forEach((anchor, i) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        gsap.to(window, {
          scrollTo: {
            y: getPosition(panels[i]),
            autoKill: false,
          },
          duration: 1,
        });
      });
    });

    /* Panels */
    const panels = gsap.utils.toArray(".container .section");
    tween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        start: "top top",
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
      },
    });

    getPosition = getScrollLookup(panels, tween, "left left");
    function getScrollLookup(targets, containerAnimation, position) {
      let triggers = gsap.utils.toArray(targets).map((section) =>
          ScrollTrigger.create({
            trigger: section,
            start: position || "left left",
            containerAnimation: containerAnimation,
          })
        ),
        st = containerAnimation.scrollTrigger;
      return (target) => {
        let t = gsap.utils.toArray(target)[0],
          i = triggers.length;
        while (i-- && triggers[i].trigger !== t) {}
        return i >= 0
          ? st.start +
              (triggers[i].start / containerAnimation.duration()) *
                (st.end - st.start)
          : console.warn("target not found", target);
      };
    }
  },
};

export default animations;
