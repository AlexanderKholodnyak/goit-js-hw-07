const control = document.getElementById('font-size-control');

const text = document.getElementById('text');

const controlFontSize = function () {
  text.style.fontSize = control.value + 'px';
};

control.addEventListener('input', controlFontSize);
