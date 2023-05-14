function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divControlsEl = document.querySelector("#controls");
const inputEl = document.querySelector("#controls input");
const buttonCreateEl = document.querySelector("#controls button[data-create]");
const divBoxesEl = document.querySelector("#boxes");
const buttonDestroyEl = document.querySelector(
  "#controls button[data-destroy]"
);

buttonCreateEl.addEventListener("click", () => {
  createBoxes(inputEl.value);
});
buttonDestroyEl.addEventListener("click", destroyBoxes);

let sizeElement = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newDevEl = document.createElement("div");
    newDevEl.style.width = `${sizeElement}` + "px";
    newDevEl.style.height = `${sizeElement}` + "px";
    newDevEl.style.backgroundColor = getRandomHexColor();
    console.log(newDevEl);
    divBoxesEl.append(newDevEl);
    sizeElement += 10;
  }
}

function destroyBoxes(event) {
  event.innerHTML = "";
  console.log("remove");
  window.location.reload();
}
