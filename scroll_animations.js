"use strict";

gsap.registerPlugin(ScrollTrigger);

export function srollingAniSetup() {
  const skyColor = "#sky";
  const frontCloud = "#parallax3";
  const middleCloud = "#parallax2";
  const backCloud = "#parallax1";
  const potatoHead = "#potato_svg";

  // const blockCount = document.querySelectorAll(".scroll_block").length;

  //Cloud yoyo
  gsap.to(frontCloud, {
    duration: 1.5,
    y: "2vw",
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  });

  gsap.to(middleCloud, {
    duration: 2.5,
    y: "1.5vw",
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  });

  gsap.to(backCloud, {
    duration: 3,
    y: "1vw",
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  });

  //cloud positions
  //block1
  gsap.to(frontCloud, {
    x: "400vw",
    scale: 4,
    scrollTrigger: { trigger: "#scroll_block1", scrub: true, end: "bottom" },
  });

  gsap.to(middleCloud, {
    x: "-150vw",
    scale: 2,
    scrollTrigger: { trigger: "#scroll_block1", scrub: true, markers: true },
  });

  gsap.to(backCloud, {
    x: "-20vw",
    scrollTrigger: { trigger: "#scroll_block1", scrub: true },
  });

  //PotatoHead

  gsap.to(potatoHead, {
    y: "-105vh",
    ease: "elastic.out(1, 1)",
    scrollTrigger: { trigger: "#scroll_block1", scrub: true, start: "top 50%" },
  });
}
