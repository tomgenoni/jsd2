var body = document.querySelector('body');
var ul = document.querySelector('ul');

ul.addEventListener('click', getColor);

function getColor(e) {
  
  if (e.target.tagName != 'LI') {
    return;
  }
  
  changeColor(e.target.dataset.color);
}

function changeColor(color) {
  body.className = color;
}
