"use strict";

//imports
import { loadSvg } from "./fetch_svg.js";
import { optionsMenuSetUp } from "./options_menu.js";

window.addEventListener("DOMContentLoaded", init);

async function init() {
  //load and display main-svg
  const url = "imgs/potatohead_svg/potato_head_cropped-01.svg";
  const object = document.querySelector("#character");
  loadSvg(url, object);

  //functinality for clicking the categories
  optionsMenuSetUp();
}
