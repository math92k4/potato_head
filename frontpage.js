"use strict"; 

window.addEventListener("DOMContentLoaded", start); 


function start () {
  showFirst();
}

function showFirst() {
  document.querySelector("#first").classList.remove("hide"); 
  setTimeout(showSecond, 700);
}

function showSecond() {
  document.querySelector("#second").classList.remove("hide"); 
  setTimeout(showThird, 700);
}

function showThird() {
  document.querySelector("#third").classList.remove("hide"); 
  setTimeout(showPotato, 400); 
}

function showPotato() {
  document.querySelector("#character").classList.remove("hide"); 
  document.querySelector("#character").addEventListener("animationend", showBtn);
}

function showBtn() {
  document.querySelector("#button").classList.remove("hide"); 
}









