"use strict";

const nose = {
  red_nose: false,
  dark_nose: false,
  pale_nose: false,
};

const hat = {
  black_hat: false,
  white_hat: false,
};

const arms = {
  arms: false,
};

const mouth = {
  lips: false,
  mustache_mouth: false,
  teeth: false,
};

const eyes = {
  os_eyes: false,
  ms_eyes: false,
  lazy_eyes: false,
};

const shoes = {
  mr_shoes: false,
  ms_shoes: false,
};

export function toggleOption(event) {
  const target = event.currentTarget;
  const option = target.dataset.name;
  const optionCategory = target.dataset.type;

  console.log(option + "   " + optionCategory);
}
