const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulEl = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const liCreateEl = document.createElement("li");

  liCreateEl.textContent = ingredient;
  liCreateEl.classList.add("item");

  ulEl.appendChild(liCreateEl);
}
