const input = document.querySelector("#validation-input");
const validLength = input.getAttribute("data-length");

const checkInput = () => {
  if (input.value.length === Number(validLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};

input.addEventListener("blur", checkInput);
