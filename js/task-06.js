const validationInput = document.getElementById('validation-input');

    validationInput.addEventListener('input', () => {
      const expectedLength = parseInt(validationInput.getAttribute('data-length'));
      const currentLength = validationInput.value.length;

      validationInput.classList.remove('valid', 'invalid');

      if (currentLength === expectedLength) {
        validationInput.classList.add('valid');
      } else {
        validationInput.classList.add('invalid');
      }
    });