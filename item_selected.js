"use strict";

export function toggleOption(event) {
  const target = event.currentTarget;
  const option = target.dataset.name;

  console.log(option);
}
