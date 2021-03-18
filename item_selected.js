"use strict";

const features = {
  red_nose: false,
  dark_nose: false,
  pale_nose: false,
  black_hat: false,
  white_hat: false,
  arms: false,
  lips: false,
  mustache_mouth: false,
  teeth: false,
  os_eyes: false,
  ms_eyes: false,
  lazy_eyes: false,
  mr_shoes: false,
  ms_shoes: false
}

export function toggleOption(event) {
  const target = event.currentTarget;
  const option = target.dataset.name;
  const optionCategory = target.dataset.type;

  console.log(option);

  if (features[option]) {
    features[option] = false;
    //console.log(features[option]);
  } else {
    document.querySelectorAll(`#elements_container [data-type=${optionCategory}`).forEach(type => {
      //console.log(type);
      features[type.dataset.name] = false;
      // console.log(features[type.dataset.name]);
    })
    features[option] = true;

    // console.log(features[option]);
  }
  console.log(features);
  
  const selectedFeature = document.querySelectorAll(`#character [data-name=${option}]`);
  if (features[option]) {
    document.querySelectorAll(`#character [data-type=${optionCategory}]`).forEach(type => {
      type.classList.add("hide");
    })
    selectedFeature.forEach(feature => {
      feature.classList.remove("hide");
    })
  } else {
    selectedFeature.forEach(feature => {
      feature.classList.add("hide");
    })
    }
  

}