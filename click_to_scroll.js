"use strict";

export function scrollPageBtnClicked() {
  const shownOptions = getArrayByClassName("#potato_svg", "show");
  const stringOfIds = createStringOfIds(shownOptions);
  const url = "scroll.html";
  goToUrlAndParams(url, stringOfIds);
}

function getArrayByClassName(container, className) {
  const result = document.querySelectorAll(`${container} .${className}`);
  return result;
}

function createStringOfIds(elements) {
  let result = "";

  elements.forEach((element) => {
    const haveColor = element.classList.contains("colorable");
    const elmId = element.getAttribute("id");

    if (haveColor) {
      const hexaCode = getHexaCode(element);
      result = elmId + "-" + hexaCode + ",";
    } else {
      result += elmId + ",";
    }
  });

  return result;
}

function getHexaCode(element) {
  const path = element.querySelector("polygon");
  const hexaCode = path.style.getPropertyValue("--svg_color").substring(1);
  console.log(hexaCode);

  return hexaCode;
}

function goToUrlAndParams(url, id) {
  window.location.href = `${url}?id=${id}`;
}
