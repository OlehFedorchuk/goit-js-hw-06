const inputEl = document.querySelector("#name-input");

const labelEl = document.querySelector("#name-output");
const textDefault = labelEl.textContent;

inputEl.addEventListener("input", onInput);
function onInput(event) {
  labelEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    labelEl.textContent = textDefault;
  }
}
