const btnDecrementEl = document.querySelector(
  '#counter button[data-action="decrement"]'
);

const btnIncrementEl = document.querySelector(
  '#counter button[data-action="increment"]'
);

const spanEl = document.querySelector("#value");
let counterValue = 0;

btnIncrementEl.addEventListener("click", () => {
  spanEl.textContent = counterValue += 1;
});

btnDecrementEl.addEventListener("click", () => {
  spanEl.textContent = counterValue -= 1;
});
