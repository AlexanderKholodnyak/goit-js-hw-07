let counterValue = 0;
const counter = document.querySelector('#value');
const incrementBatton = document.querySelector('[data-action="increment"]');
const decrementBatton = document.querySelector('[data-action="decrement"]');

const increment = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

incrementBatton.addEventListener('click', increment);
decrementBatton.addEventListener('click', decrement);
