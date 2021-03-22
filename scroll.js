"use strict";
import { loadSvg } from "./fetch_svg.js";
import { srollingAniSetup } from "./scroll_animations.js";

window.addEventListener("DOMContentLoaded", init);

async function init() {
  //loads and displays svg
  const url = "imgs/potatohead_svg/potato_head_cropped-01.svg";
  const element = document.querySelector("#character");
  await loadSvg(url, element);

  //gets string of ids from URLparams
  const stringOfIds = getUrlParams();

  //splits string to array by ","
  const arrayOfIds = stringToArray(stringOfIds, ",");

  //get color values - if any
  const svgColors = arrayOfIds.filter(filterColors);

  //for each svgPart, detemerine to show or not
  const allOptionParts = document.querySelectorAll(".hide");
  allOptionParts.forEach((part) => {
    determineShow(part, arrayOfIds);
  });

  srollingAniSetup();
}

function getUrlParams() {
  let urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  return id;
}

function stringToArray(string, splitBy) {
  const result = string.split(splitBy);
  return result;
}

function determineShow(part, arrayOfIds) {
  const partId = part.getAttribute("id");

  arrayOfIds.forEach((paramsId) => {
    let idForMatch = paramsId;

    if (paramsId.includes("#")) {
      const onlyColor = getSvgColor(paramsId);
      idForMatch = getId();
    }
    if (idForMatch === partId) {
      part.classList = "show";
    }
  });

  console.log(part);
}
