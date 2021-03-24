"use strict";

export function toggleOptions(element) {
  //mobile open/close functionality
  document.querySelector("#icon").classList.toggle("x_icon");
  document.querySelector("#elements_container").classList.toggle("hide");
  document.querySelector("#elements_container").classList.toggle("clicked");

  //gets datasets from selected element
  const option = element.dataset.name;
  const optionCategory = element.dataset.type;

  //identifies svg-parts, by matching datasets
  const potatoCategory = document.querySelectorAll(`#potato_parts [data-type=${optionCategory}]`);
  const potatoPart = document.querySelector(`#potato_parts [data-name=${option}]`);

  //checks if svg-part already have .show
  const isShown = checkClassList(potatoPart, "show");

  toggleChosen(option, optionCategory);

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

function toggleChosen(name, type) {
  const chosenPart = document.querySelector(`#elements_container [data-name=${name}]`);
  const isChosen = chosenPart.classList.contains("chosen");
  console.log(isChosen);
  const allParts = document.querySelectorAll(`#elements_container [data-type=${type}]`);
  allParts.forEach((part) => {
    part.classList.remove("chosen");
  });

  if (!isChosen) {
    chosenPart.classList.add("chosen");
  }
}

function removeThisOption(potatoPart) {
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
    case "arms":
    case "mr_shoes":
    case "ms_shoes":
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
  allParts.forEach((part) => {
    part.classList.add("show");
  });
}

// Animate the chosen option
function animateOption(option) {
  const part = document.querySelector(`#potato_parts [data-name=${option}]`);
  part.classList.remove("animate_out");

  const start = document.querySelector(`#elements_container [data-name=${option}]`).getBoundingClientRect();
  const end = part.getBoundingClientRect();

  const diffX = start.x - end.x;
  const diffY = start.y - end.y;
  part.style.setProperty("--diffX", diffX);
  part.style.setProperty("--diffY", diffY);

  part.classList.add("animate_in");
  part.addEventListener("animationend", animationEnd);
  function animationEnd() {
    part.removeEventListener("animationend", animationEnd);
    hasShadow(option);
  }
}
