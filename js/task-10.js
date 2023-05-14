function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divControlsEl = document.querySelector("#controls input");
const inputEl = document.querySelector("#controls input");
const buttonCreateEl = document.querySelector("#controls button[data-create]");
const buttonDestroyEl = document.querySelector(
  "#controls button[data-destroy]"
);
const divBoxesEl = document.querySelector("#boxes");

buttonCreateEl.addEventListener("click", () => {
  const amount = parseInt(inputEl.value);
  createBoxes(amount);
});

buttonDestroyEl.addEventListener("click", destroyBoxes);

let sizeElement = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newDivEl = document.createElement("div");
    newDivEl.style.width = `${sizeElement}` + "px";
    newDivEl.style.height = `${sizeElement}` + "px";
    newDivEl.style.backgroundColor = getRandomHexColor();
    console.log(newDivEl);
    divBoxesEl.append(newDivEl);
    sizeElement += 10;
  }
}

function destroyBoxes() {
  divBoxesEl.innerHTML = "";
  window.location.reload();
}
