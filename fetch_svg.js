// TODO: make this return instead of callback function

export async function loadSvg(url, object) {
  const response = await fetch(url);
  const svgData = await response.text();

  displaySvg(svgData, object);
}

function displaySvg(svgData, object) {
  object.innerHTML = svgData;
}
