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
    result += element.getAttribute("id") + ",";
  });
  return result;
}

function goToUrlAndParams(url, id) {
  window.location.href = `${url}?id=${id}`;
}
