"use strict";

export function toggleOptions(event) {
  console.log("toggleOption");
  document.querySelector("#icon").classList.toggle("x_icon");
  document.querySelector("#elements_container").classList.toggle("hide");

  //gets datasets from event target
  const target = event.currentTarget;
  const option = target.dataset.name;
  const optionCategory = target.dataset.type;

  //identifies svg-parts, by matching datasets
  const potatoCategory = document.querySelectorAll(`#character [data-type=${optionCategory}]`);
  const potatoPart = document.querySelector(`#character [data-name=${option}]`);

  //checks if svg-part already have .show
  const isShown = checkClassList(potatoPart, "show");
  if (isShown) {
    removeThisOption();
    function removeThisOption() {
      console.log("removeThisOption: ", potatoPart);
      potatoPart.classList.remove("animate_in");
      potatoPart.classList.add("animate_out");
      potatoPart.addEventListener("animationend", animationEnd);
        function animationEnd() {
          potatoPart.removeEventListener("animationend", animationEnd);
          hideAllInCategory(potatoCategory);
        }
    }
  } else {
    removePrevObtion();
    function removePrevObtion(){
      console.log("removePrevObtion: ", potatoCategory);
      potatoCategory.forEach(part => {
        const animated = checkClassList(part, "animate_in");
        console.log(part);
        console.log("animated", animated);
        if (animated) {
          part.classList.remove("animate_in");
          part.classList.add("animate_out");
          part.addEventListener("animationend", animationEnd);
          function animationEnd() {
            part.removeEventListener("animationend", animationEnd);
            hideAllInCategory(potatoCategory);
          }
        } 
      })
      showOption(option);
      animateOption(option);
    } 
  }
}

//if classList includes className on element
function checkClassList(element, className) {
  console.log("checkClassList");
  if (element.classList.length === 0) {
    return true;
  } else {
    return element.classList.contains(className);
  }
}

//hides all svg parts in the clicked category
function hideAllInCategory(potatoCategory) {
  console.log("hideAllInCategory");
  potatoCategory.forEach((option) => {
    const optionName = option.dataset.name;
    const allParts = document.querySelectorAll(`#character [data-name=${optionName}]`);
    allParts.forEach((part) => {
      part.classList = "hide";
    });
  });
}

//Add .show to clicked option
function showOption(option) {
  console.log("showOption");
  const allParts = document.querySelectorAll(`#character [data-name=${option}]`);
  allParts.forEach((part) => {
    part.classList = "show";
  });
}

function animateOption(option) {
  console.log("animateOption");
  const allParts = document.querySelectorAll(`#character [data-name=${option}]`);
  allParts.forEach(part => {
    part.classList.remove("animate_out");
    const start = document.querySelector(`#elements_container [data-name=${option}]`).getBoundingClientRect();
    // Find the end position
    const end = part.getBoundingClientRect();
    // Translate the element to the start position
    const diffX = start.x - end.x;
    const diffY = start.y - end.y;
    const center = "center center";
    part.style.setProperty("--diffX", diffX);
    part.style.setProperty("--diffY", diffY);
    part.style.setProperty("transform-origin", center);
    
    // Animate the element
    part.classList.add("animate_in");
  })
}
