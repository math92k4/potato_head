"use strict";

export function toggleOptions(event) {
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
