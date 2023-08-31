const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listElm = document.getElementById("ingredients");
const items = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const name = ingredients[i];
  const itemElm = document.createElement("li");
  itemElm.classList.add("item");
  itemElm.textContent = `${name}`;
  items.push(itemElm);
}
listElm.append(...items);