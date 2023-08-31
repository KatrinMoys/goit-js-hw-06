const nameInput = document.querySelector('#name-input');
    const nameOutput = document.querySelector('#name-output');

    nameInput.addEventListener('input', () => {
      nameOutput.textContent = nameInput.value || 'Anonymous';
    });


    // const nameInput = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");

// nameInput.addEventListener("input", onInput);
// function onInput(event) {
//   nameOutput.textContent = event.currentTarget.value;
//   if (event.currentTarget.value === "") {
//     nameOutput.textContent = "Anonymous";
//   }
// }
