//Task_1

const itemsInCategories = document.querySelectorAll('.item');
console.log(`В списке ${itemsInCategories.length} категории.`);

itemsInCategories.forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
});
