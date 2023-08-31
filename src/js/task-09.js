function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backgroundColorBody = document.querySelector('body');
const backgroundColorText = document.querySelector('.color');
const changeColorButon = document.querySelector('.change-color');

changeColorButon.addEventListener('click', changeColor);
function changeColor() {
  let color = getRandomHexColor();
  backgroundColorBody.style.background = color;
  backgroundColorText.textContent = color;
}
