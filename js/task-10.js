function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.getElementById('controls');
    const createButton = controlsDiv.querySelector('[data-create]');
    const destroyButton = controlsDiv.querySelector('[data-destroy]');
    const boxesDiv = document.getElementById('boxes');

    createButton.addEventListener('click', createBoxes);
    destroyButton.addEventListener('click', destroyBoxes);

    function createBoxes() {
      const amount = +controlsDiv.querySelector('input').value;
      const boxSize = 30;

      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${boxSize + i * 10}px`;
        box.style.height = `${boxSize + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesDiv.appendChild(box);
      }
    }

    function destroyBoxes() {
      boxesDiv.innerHTML = '';
    }

  
