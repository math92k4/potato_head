"use strict";

export function toggleOptions(element) {
  //mobile open/close functionality
  document.querySelector("#icon").classList.toggle("x_icon");
  document.querySelector("#elements_container").classList.toggle("hide");

  //gets datasets from selected element
  const option = element.dataset.name;
  const optionCategory = element.dataset.type;

  //identifies svg-parts, by matching datasets
  const potatoCategory = document.querySelectorAll(`#potato_parts [data-type=${optionCategory}]`);
  const potatoPart = document.querySelector(`#potato_parts [data-name=${option}]`);

  //checks if svg-part already have .show
  const isShown = checkClassList(potatoPart, "show");

  if (isShown) {
    removeThisOption(potatoPart);
  } else {
    removePrevObtion(potatoCategory);
    showOption(option);
    animateOption(option);
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

function removeThisOption(potatoPart) {
  const shadow = document.querySelector(`#back_shadow [data-name=${potatoPart.dataset.name}]`);
  hasShadow(potatoPart.dataset.name);
  potatoPart.classList.remove("animate_in");
  potatoPart.classList.add("animate_out");
  potatoPart.addEventListener("animationend", animationEnd);
  function animationEnd() {
    potatoPart.removeEventListener("animationend", animationEnd);
    potatoPart.classList.remove("show");
    potatoPart.classList.add("hide");
  }
}

function removePrevObtion(potatoCategory) {
  // Checks if there is a part of same type, that already has been animated
  potatoCategory.forEach((part) => {
    const animated = checkClassList(part, "animate_in");
    if (animated) {
      hasShadow(part.dataset.name);
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
}

// Checks if the selected part has a shadow, and shows/hides it if needed
function hasShadow(dataName) {
  const shadow = document.querySelector(`#back_shadow [data-name=${dataName}]`);
  switch (dataName) {
    case 'arms':
    case 'mr_shoes':
    case 'ms_shoes':
      shadow.classList.toggle("show");
      shadow.classList.toggle("hide");
      break;
    default:
      console.log(`${dataName} has no shadow.`);
  }
}

//Add .show to clicked option
function showOption(option) {
  const allParts = document.querySelectorAll(`#potato_parts [data-name=${option}]`);
  hasShadow(option);
  allParts.forEach((part) => {
    part.classList.add("show");
  });
}

function animateOption(option) {
  const allParts = document.querySelectorAll(`#potato_parts [data-name=${option}]`);
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