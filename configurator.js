"use strict";

//imports
import { loadSvg } from "./fetch_svg.js";

window.addEventListener("DOMContentLoaded", init);

async function init() {
  const url = "imgs/potatohead_svg/potato_head_cropped-01.svg";
  const object = document.querySelector("#character");
  loadSvg(url, object);
}
