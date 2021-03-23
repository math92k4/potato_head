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
    ease: "none",
    scrollTrigger: { trigger: "#scroll_block1", scrub: true, end: "bottom" },
  });

  gsap.to(middleCloud, {
    x: "-150vw",
    scale: 2,
    ease: "none",
    scrollTrigger: { trigger: "#scroll_block1", scrub: true },
  });

  gsap.to(backCloud, {
    x: "-20vw",
    ease: "none",
    scrollTrigger: { trigger: "#scroll_block1to3", scrub: true },
  });

  //PotatoHead

  gsap.to(potatoHead, {
    y: "-110vh",
    ease: "easeOut",
    scrollTrigger: { trigger: "#scroll_block1", scrub: true },
  });

  gsap.to("#character", {
    y: "200vh",
    ease: "Power1.easeIn",
    scrollTrigger: { trigger: "#scroll_block3", scrub: true },
  });

  gsap.to(potatoHead, {
    rotate: "100deg",
    ease: "none",
    scrollTrigger: { trigger: "#scroll_block1and2", scrub: true },
  });

  const shownParts = document.querySelectorAll("#character .show");
  shownParts.forEach((part) => {
    gsap.to(part, {
      opacity: 0,
      scrollTrigger: { trigger: "#scroll_block1to3", scrub: true, markers: true, start: "top 0%", end: "bottom 100%" },
    });
  });

  setTimeout(setUpScrollRedirect, 200);
}

function setUpScrollRedirect() {
  const scrollTrigger = document.querySelector("#scroll_block3");
  const observer = new IntersectionObserver(lastBlockObserved, { threshold: 0.99 });
  observer.observe(scrollTrigger);
}

function lastBlockObserved(event) {
  if (event[0].isIntersecting) {
    console.log("hej");
    window.location.href = "configurator.html";
  }
}
