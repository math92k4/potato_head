"use strict";

import { toggleOptions } from "./item_selected.js";

export function colorSvg(element) {
  const container = document.querySelector("#colorselector");

  const colorString = element.dataset.colors;
  const colorArray = colorString.split(" ");

  console.log(colorArray);

  colorArray.forEach(makeColorBtns);
  container.classList.add("show");

  /*
   *
   *
   * Closure
   */

  function makeColorBtns(color) {
    const newBtn = document.createElement("div");

    newBtn.style.setProperty("--color", color);
    newBtn.dataset.hexacode = color;
    newBtn.classList.add("color_button");

    newBtn.addEventListener("click", colorSelected);

    container.appendChild(newBtn);
  }

  function colorSelected() {
    const selectedColor = this.dataset.hexacode;

    const dataName = element.dataset.name;
    const svgPaths = document.querySelectorAll(`#character [data-name=${dataName}] polygon`);

    svgPaths.forEach((part) => {
      part.style.setProperty("--svg_color", selectedColor);
    });

    closeContainer();
  }

  function closeContainer() {
    container.innerHTML = "";
    container.classList.remove("show");

    console.log(element);

    toggleOptions(element);
  }
}
