const changeColorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = () => {
  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = `${backgroundColor}`;
  colorName.textContent = `${backgroundColor}`;
};

changeColorBtn.addEventListener("click", changeColor);
