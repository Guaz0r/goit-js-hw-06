const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');
const items = [];
for (let i = 0; i < ingredients.length; i++) {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredients[i];
  items.push(item);
}
list.append(...items);

console.log(items);