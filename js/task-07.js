const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');
  
  fontSizeControl.addEventListener('input', changeFontSize);


  function changeFontSize() {
    const fontSize = fontSizeControl.value + 'px';
    textElement.style.fontSize = fontSize;
  }


  changeFontSize();