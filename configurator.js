"use strict";

//imports
import { loadSvg } from "./fetch_svg.js";
import { optionsMenuSetUp } from "./options_menu.js";
import { colorSvg } from "./color_svg.js";
import { toggleOptions } from "./item_selected.js";
import { scrollPageBtnClicked } from "./click_to_scroll.js";

window.addEventListener("DOMContentLoaded", init);

async function init() {
  //load and display main-svg
  const url = "imgs/potatohead_svg/potato_head_cropped-01.svg";
  const object = document.querySelector("#character");
  loadSvg(url, object);

  //functinality for clicking the categories
  optionsMenuSetUp();

  //checks if clicked part is colorable
  const options = document.querySelectorAll("#elements_container img");
  options.forEach((option) => {
    option.addEventListener("click", toggleOrColor);
  });

  document.querySelector("#scroll_p_btn").addEventListener("click", scrollPageBtnClicked);
}

function toggleOrColor() {
  const dataName = this.dataset.name;
  const svgGroup = document.querySelector(`#character [data-name=${dataName}]`);

  if (this.classList.contains("colorable") && !svgGroup.classList.contains("show")) {
    colorSvg(this);
  } else {
    toggleOptions(this);
  }
}
