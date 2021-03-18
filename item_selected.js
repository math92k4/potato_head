"use strict";

export function toggleOptions(event) {
  const target = event.currentTarget;
  const option = target.dataset.name;
  const optionCategory = target.dataset.type;
  const selectedElement = document.querySelector(`#character [data-name=${option}`);
  const categoryElements = document.querySelectorAll(`#character [data-type=${optionCategory}`);
  const isShown = checkClassListFor(selectedElement, "show");

  if (isShown) {
    selectedElement.classList = "hide";
  } else {
    categoryElements.forEach((element) => {
      element.classList = "hide";
    });

    selectedElement.classList.add("show");
  }
}

function checkClassListFor(element, className) {
  return element.classList.contains(className);
}
