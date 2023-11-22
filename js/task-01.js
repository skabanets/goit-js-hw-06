const categories = document.querySelectorAll(".item");

const countCategories = () => {
  const totalCatrgoties = categories.length;

  return console.log(`Number of categories: ${totalCatrgoties}`);
};

countCategories();

categories.forEach((category) => {
  const titleCategory = category.querySelector("h2");
  const elementsCategory = category.querySelectorAll("li").length;

  return console.log(
    `Category: ${titleCategory.textContent} \nElements: ${elementsCategory}`
  );
});
