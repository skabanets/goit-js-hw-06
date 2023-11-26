const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxStorage = document.querySelector("#boxes");
const amountInput = document.querySelector(".js-amount-input");

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const createBoxes = (amount) => {
  destroyStorage();

  const elements = new Array(amount).fill(0);
  const divArray = [];

  elements.reduce((size, element) => {
    size += 10;
    element = document.createElement("div");
    element.style.height = `${size}px`;
    element.style.width = `${size}px`;
    element.style.backgroundColor = getRandomHexColor();
    divArray.push(element);
    return size;
  }, 20);

  const title = document.createElement("h1");
  const message =
    divArray.length > 0
      ? `Amount of elements: ${divArray.length}`
      : "Warning! Enter correct amount (more than 0).";
  title.textContent = message;
  boxStorage.append(title, ...divArray);
};

const setAmount = () => {
  const amount = +amountInput.value;
  createBoxes(amount);
};

const destroyStorage = () => {
  boxStorage.innerHTML = "";
  amountInput.value = "0";
};

createBtn.addEventListener("click", setAmount);
destroyBtn.addEventListener("click", destroyStorage);
