const rangeEl = document.querySelector("#font-size-control");

rangeEl.addEventListener("input", onInput);

const spanEl = document.querySelector("#text");

function onInput() {
  const fontSize = rangeEl.value + "px";
  spanEl.style.fontSize = fontSize;
}
