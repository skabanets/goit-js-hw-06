const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const setFontSize = () => (text.style.fontSize = `${input.value}px`);

input.addEventListener("input", setFontSize);
