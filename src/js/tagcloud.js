import TagCloud from "TagCloud";

const tagCloud = {
  cloud: () => {
    /* SPhere */
    const myTags = [
      "JavaScript",
      "CSS",
      "Sass",
      "HTML",
      "git",
      "Node.js",
      "Webpack",
      "JSON",
      "Babel",
      "GSAP",
      "Insomnia",
      "Figma",
    ];

    const tagCloud = TagCloud(".about--container__sphere", myTags, {
      // radius in px
      radius: 150,

      // animation speed
      // slow, normal, fast
      maxSpeed: "fast",
      initSpeed: "fast",

      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 135,

      // interact with cursor move on mouse out
      keep: true,
      //Css class to be used for the tagcloud container.
      containerClass: "tagcloud",
      itemClass: "tagcloud--item",
      useContainerInlineStyles: true,
      useItemInlineStyles: true,
    });
  },
};

export default tagCloud;
