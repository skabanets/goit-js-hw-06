const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const setOutput = () => {
  output.textContent = input.value === "" ? "Anonymous" : `${input.value}`;
};

input.addEventListener("input", setOutput);
