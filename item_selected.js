"use strict";

export function toggleOptions(element) {
  //mobile open/close functionality
  document.querySelector("#icon").classList.toggle("x_icon");
  document.querySelector("#elements_container").classList.toggle("hide");

  //gets datasets from selected element
  const option = element.dataset.name;
  const optionCategory = element.dataset.type;

  //identifies svg-parts, by matching datasets
  const potatoCategory = document.querySelectorAll(`#character [data-type=${optionCategory}]`);
  const potatoPart = document.querySelector(`#character [data-name=${option}]`);

  //checks if svg-part already have .show
  const isShown = checkClassList(potatoPart, "show");

  if (isShown) {
    removeThisOption();
    function removeThisOption() {
      potatoPart.classList.remove("animate_in");
      potatoPart.classList.add("animate_out");
      potatoPart.addEventListener("animationend", animationEnd);
      function animationEnd() {
        potatoPart.removeEventListener("animationend", animationEnd);
        potatoPart.classList.remove("show");
        potatoPart.classList.add("hide");
      }
    }
  } else {
    removePrevObtion();
    function removePrevObtion() {
      // Checks if there is a part of same type, that already has been animated
      potatoCategory.forEach((part) => {
        const animated = checkClassList(part, "animate_in");
        if (animated) {
          part.classList.remove("animate_in");
          part.classList.add("animate_out");
          part.addEventListener("animationend", animationEnd);
          function animationEnd() {
            part.removeEventListener("animationend", animationEnd);
            part.classList.remove("show");
            part.classList.add("hide");
          }
        }
      });
      showOption(option);
      animateOption(option);
    }
  }
}

//if classList includes className on element
function checkClassList(element, className) {
  if (element.classList.length === 0) {
    return true;
  } else {
    return element.classList.contains(className);
  }
}

//Add .show to clicked option
function showOption(option) {
  const allParts = document.querySelectorAll(`#character [data-name=${option}]`);
  allParts.forEach((part) => {
    part.classList.add("show");
  });
}

function animateOption(option) {
  const allParts = document.querySelectorAll(`#character [data-name=${option}]`);
  allParts.forEach((part) => {
    part.classList.remove("animate_out");
    const start = document.querySelector(`#elements_container [data-name=${option}]`).getBoundingClientRect();
    // Find the end position
    const end = part.getBoundingClientRect();
    // Translate the element to the start position
    const diffX = start.x - end.x;
    const diffY = start.y - end.y;
    part.style.setProperty("--diffX", diffX);
    part.style.setProperty("--diffY", diffY);

    // Animate the element
    part.classList.add("animate_in");
  });
}
