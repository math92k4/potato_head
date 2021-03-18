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

  console.log(optionCategory);

  if (features[option]) {
    features[option] = false;
  } else {
    features[option] = true;
    document.querySelectorAll(`[data-type=${optionCategory}`).forEach(type => {
      type.dataset.name = false;
    })
    
    features[optionCategory]
  }
  console.log(features[option]);

}