const counter = document.querySelector("#value");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = 0;

incrementButton.addEventListener("click", () => {
  counterValue++;
  counter.textContent = `${counterValue}`;
});

decrementButton.addEventListener("click", () => {
  counterValue--;
  counter.textContent = `${counterValue}`;
});
