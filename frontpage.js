"use strict"; 

window.addEventListener("DOMContentLoaded", start); 







function start () {
  showFirst();
}

function showFirst() {
  const firstText = document.querySelector("#first"); 
let firstSplit; 
  firstSplit = firstText.textContent.split(""); 
  firstText.textContent = null; 

  firstSplit.forEach((letter, index) => {
    const span = document.createElement("span"); 
    span.textContent += letter; 
    firstText.append(span); 
    span.classList.add("cooltext"); 
    span.style.setProperty("--delay", index); 
    firstText.classList.remove("hide"); 
  });

  setTimeout(showSecond, 500);
}

function showSecond() {
  const secondText = document.querySelector("#second"); 
let secondSplit; 
  secondSplit = secondText.textContent.split(""); 
  secondText.textContent = null; 

  secondSplit.forEach((letter, index) => {
    const span = document.createElement("span"); 
    span.textContent += letter; 
    secondText.append(span); 
    span.classList.add("cooltextsecond"); 
    span.style.setProperty("--delay", index); 
    secondText.classList.remove("hide"); 
  });
  setTimeout(showThird, 1200);
}

function showThird() {
  const thirdText = document.querySelector("#third"); 
let thirdSplit; 
  thirdSplit = thirdText.textContent.split(""); 
  thirdText.textContent = null; 

  thirdSplit.forEach((letter, index) => {
    const span = document.createElement("span"); 
    span.textContent += letter; 
    thirdText.append(span); 
    span.classList.add("cooltextthird"); 
    span.style.setProperty("--delay", index); 
    thirdText.classList.remove("hide"); 
  });
  setTimeout(showPotato, 1000); 
}

function showPotato() {
  document.querySelector("#character").classList.remove("hide"); 
  document.querySelector("#character").classList.add("roll_in"); 

  setTimeout(showBtn, 3000); 

}

function showBtn() {
  document.querySelector("#character").classList.add("wiggle"); 
  document.querySelector("#button").classList.remove("hide"); 
  setTimeout(flyRight, 2000); 

}

function flyRight () {
  document.querySelector("#lightyearRight").classList.remove("hide"); 
  document.querySelector("#lightyearRight").addEventListener("animationend", flyLeft);

}

function flyLeft () {
  document.querySelector("#lightyearLeft").classList.remove("hide"); 
  document.querySelector("#lightyearLeft").addEventListener("animationend", flyRight);

}










