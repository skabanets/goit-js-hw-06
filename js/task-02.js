const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach((el) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${el}`;
  listItem.classList.add("item");
  list.appendChild(listItem);
});
