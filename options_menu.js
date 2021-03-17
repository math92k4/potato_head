"use strict";

export function optionsMenuSetUp() {
  const allDropdowns = document.querySelectorAll(".dropdown");
  allDropdowns.forEach(setInnerHeightProperty);

  document.querySelector("#toggle_options_menu").addEventListener("click", toggleOptionsMenu);

  const categories = document.querySelectorAll(".category_btn");
  categories.forEach((category) => {
    category.addEventListener("click", catergoryClicked);
  });
}

/*
 *
 *
 * setInnerHeightProperty
 */
function setInnerHeightProperty(dropdown) {
  const pHeight = dropdown.querySelector("p").offsetHeight;
  const optionsHeigt = dropdown.querySelector(".options").offsetHeight;
  const height = pHeight + optionsHeigt + "px";

  dropdown.style.setProperty("--height_on_show", height);
}

/*
 *
 *
 * catergoryClicked
 */
function toggleOptionsMenu() {
  this.querySelector("#icon").classList.toggle("x_icon");
  document.querySelector("#elements_container").classList.toggle("hide");
  console.log("works");
}

/*
 *
 *
 * catergoryClicked
 */
function catergoryClicked() {
  const selectedDropdown = this.nextElementSibling;
  const selectedArrow = this.querySelector(".arrow");
  const alredyShown = checkClassList(selectedDropdown, "show");

  toggleArrows(selectedArrow, alredyShown);
  toggleDropdowns(selectedDropdown, alredyShown);
}

function checkClassList(element, className) {
  if (element.classList.contains(className)) {
    return true;
  } else {
    return false;
  }
}

function toggleArrows(selectedArrow, alredyShown) {
  const allArrows = document.querySelectorAll(".arrow");

  allArrows.forEach((arrow) => {
    if (arrow === selectedArrow && alredyShown === false) {
      arrow.classList = "arrow turned";
    } else {
      arrow.classList = "arrow";
    }
  });
}

function toggleDropdowns(selectedDropdown, alredyShown) {
  const allDropdowns = document.querySelectorAll(".dropdown");

  allDropdowns.forEach((dropdown) => {
    if (dropdown === selectedDropdown && alredyShown === false) {
      dropdown.classList = "dropdown show";
    } else {
      dropdown.classList = "dropdown";
    }
  });
}
