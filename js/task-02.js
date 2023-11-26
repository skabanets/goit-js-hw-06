const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const newIngridients = ingredients.map((el) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${el}`;
  listItem.classList.add("item");
  return listItem;
});

list.append(...newIngridients);
