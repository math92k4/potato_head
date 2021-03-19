"use strict";

export function toggleOptions(event) {
  document.querySelector("#icon").classList.toggle("x_icon");
  document.querySelector("#elements_container").classList.toggle("hide");

  //gets datasets from event target
  const target = event.currentTarget;
  const option = target.dataset.name;
  const optionCategory = target.dataset.type;

  //identifies svg-parts, by matching datasets
  const potatoCategory = document.querySelectorAll(`#character [data-type=${optionCategory}]`);
  const potatoPart = document.querySelector(`#character [data-name=${option}]`);

  //checks if svg-part already have .show
  const isShown = checkClassList(potatoPart, "show");

  hideAllInCategory(potatoCategory);

  if (!isShown) {
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

//hides all svg parts in the clicked category
function hideAllInCategory(potatoCategory) {
  potatoCategory.forEach((option) => {
    const optionName = option.dataset.name;
    const allParts = document.querySelectorAll(`#character [data-name=${optionName}]`);
    allParts.forEach((part) => {
      part.classList = "hide";
    });
  });
}

//Add .show to clicked option
function showOption(option) {
  const allParts = document.querySelectorAll(`#character [data-name=${option}]`);
  allParts.forEach((part) => {
    part.classList = "show";
  });
}

function animateOption(option) {
  console.log(option);
  const allParts = document.querySelectorAll(`#character [data-name=${option}]`);
  allParts.forEach(part => {
    
    console.log(part);

    const start = document.querySelector(`#elements_container [data-name=${option}]`).getBoundingClientRect();
    // Find the end position
    const end = part.getBoundingClientRect();
    // Translate the element to the start position
    const diffX = start.x - end.x;
    const diffY = start.y - end.y;
    const center = "center center";
    part.style.setProperty("--diffX", diffX);
    part.style.setProperty("--diffY", diffY);
    part.style.setProperty("transform-origin", center);
    
    // Animate the element
    part.classList.add("animate_in");

  })
  //  document.querySelector(`#${option}`).classList.add("animate_in");
  //  part.querySelectorAll(`img`)
  
}
