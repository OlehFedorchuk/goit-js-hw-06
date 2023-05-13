const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInput);

function onInput(event) {
  const inputValue = inputEl.value;
  const dataLength = inputEl.getAttribute("data-length");

  if (inputValue.length === Number(dataLength)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
