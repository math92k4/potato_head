"use strict";

//imports
import { loadSvg } from "./fetch_svg.js";

window.addEventListener("DOMContentLoaded", init);

async function init() {
  //load and display main-svg
  const url = "imgs/potatohead_svg/potato_head_cropped-01.svg";
  const object = document.querySelector("#character");
  loadSvg(url, object);

  setUpCategoryLister();
}

function setUpCategoryLister() {
  const categories = document.querySelectorAll(".category_btn");

  categories.forEach((category) => {
    category.addEventListener("click", catergoryClicked);
  });
}

function catergoryClicked() {
  hideAllCategories();

  //adds class "show" to the clicked category dropdown
  const categoryDropdown = this.nextElementSibling;
  categoryDropdown.classList.add("show");
  console.log(categoryDropdown);
}

function hideAllCategories() {
  const allDropdowns = document.querySelectorAll(".dropdown");
  allDropdowns.forEach((dropdown) => {
    dropdown.classList = "dropdown";
    console.log(dropdown);
  });
}
