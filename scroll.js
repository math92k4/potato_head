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
    let svgColor = null;

    if (idForMatch.includes("-")) {
      svgColor = getSvgColor(paramsId);
      idForMatch = getOnlyId(paramsId);
    }

    if (idForMatch === partId) {
      part.classList = "show";
      setColor(part, svgColor);
    }
  });

  /*
   *
   *
   * closure
   */
  function getSvgColor(paramsId) {
    const colorStart = paramsId.indexOf("-");
    const colorString = paramsId.substring(colorStart + 1);
    const result = "#" + colorString;

    return result;
  }

  function getOnlyId(paramsId) {
    const idEnd = paramsId.indexOf("-");
    const idString = paramsId.substring(0, idEnd);

    return idString;
  }

  function setColor(part, svgColor) {
    const paths = part.querySelectorAll("polygon");

    paths.forEach((path) => {
      path.style.setProperty("--svg_color", svgColor);
    });
  }
}
