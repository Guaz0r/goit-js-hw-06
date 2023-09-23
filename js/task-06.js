const input = document.getElementById('validation-input');
  const expectedLength = parseInt(input.getAttribute('data-length'));

  const validInput = () => {
    const inputValue = input.value.length; 

    if (inputValue === expectedLength) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  };

  input.addEventListener('input', validInput);
  input.addEventListener('focus', () => {
    input.classList.remove('valid', 'invalid');
  });