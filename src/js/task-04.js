const counterValue = document.getElementById('value');
    const decrementBtn = document.querySelector('[data-action="decrement"]');
    const incrementBtn = document.querySelector('[data-action="increment"]');
    
let currentValue = 0;
  decrementBtn.addEventListener('click', decrementtValue);
  incrementBtn.addEventListener('click', incrementValue);

function decrementtValue() {
      currentValue -= 1;
      counterValue.textContent = currentValue;
 }
function incrementValue() {
      currentValue += 1;
      counterValue.textContent = currentValue;
    }

    /*decrementBtn.addEventListener('click', () => {
      currentValue -= 1;
      counterValue.textContent = currentValue;
    });
    
    incrementBtn.addEventListener('click', () => {
      currentValue += 1;
      counterValue.textContent = currentValue;
    });
    */