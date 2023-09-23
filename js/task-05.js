const input = document.getElementById('name-input');
  const output = document.getElementById('name-output');

  input.addEventListener('input', (event) => {
    const inputValue = event.target.value.trim(); // прибираємо зайві пробіли
    output.textContent = inputValue !== '' ? inputValue : 'Anonymous';
  });