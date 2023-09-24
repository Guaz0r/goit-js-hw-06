const list = document.querySelector('#categories');
const items = list.children;
console.log(`Number of categories: ${items.length}`);


[...items].forEach(element => {
  console.log(`Category: ${element.children[0].textContent}`);
  console.log(`Elements: ${element.children[1].children.length}`);
});