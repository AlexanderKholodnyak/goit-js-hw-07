//Task_1

const countCategories = document.querySelectorAll('.item');
console.log(`В списке ${countCategories.length} категории.`);

countCategories.forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
});
