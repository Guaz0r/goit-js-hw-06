 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }


  const START_SIZE = 19;
  const NEXT_UP = 7;

  const divBox = document.querySelector('#boxes');
  const btnCreate = document.querySelector('[data-create]');
  const btnDestroy = document.querySelector('[data-destroy]');
  const input = document.querySelector('input');

  
  function createBoxes(quantity) {
     const childrenCount = divBox.children.length;
     let items = [];

    for (let i = 0; i < quantity; i++) {
      let item = document.createElement('div');
      item.style.height = item.style.width = `${START_SIZE + NEXT_UP * (i + childrenCount)}px`;
      item.style.backgroundColor = getRandomHexColor();
      items.push(item);
    }

    divBox.append(...items);
  }

  function destroyBoxes() {
    [...divBox.children].forEach(element => {
      element.remove();
    });
  }

  btnCreate.addEventListener('click', () => {
    const amount = Number(input.value);
    createBoxes(amount);
  });

  btnDestroy.addEventListener('click', destroyBoxes);