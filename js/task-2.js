const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients');

const elements = ingredients.map(item => {
  const itemIngredients = document.createElement('li');
  itemIngredients.textContent = item;
  return itemIngredients;
});

listIngredients.append(...elements);
