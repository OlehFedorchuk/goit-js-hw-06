const ulCategoriesEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${ulCategoriesEl.length}`);

ulCategoriesEl.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
