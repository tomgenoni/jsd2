// localStorage.setItem('name','Tom');
// localStorage.setItem('birthday', 1980);
//
// var name = localStorage.getItem('name');
// var day = localStorage.getItem('birthday');
//
// var car = {
//   make: 'VW',
//   model: 'Golf',
//   year: '2012'
// }
//
// localStorage.setItem('car', JSON.stringify(car));
//
// var myCar = localStorage.getItem('car');
// var myCar = JSON.parse(myCar);

var target = document.querySelector('#target');

var save   = document.querySelector('.save');
var remove = document.querySelector('.remove');
var make   = document.querySelector('.make');
var model  = document.querySelector('.model');


save.addEventListener('click', saveCar);
remove.addEventListener('click', clearCar);
window.addEventListener('load', updatePage)

function saveCar(){
  
  var car = {
    make : make.value,
    model: model.value
  }
  
  var string = JSON.stringify(car);
  localStorage.setItem('car', string);
  
  updatePage();
}

function updatePage() {
  var car = localStorage.getItem('car');
  
  if ( car == null) return;
  
  car = JSON.parse(car);
  target.textContent = car.model + ' ' + car.make;
}

// Clear data

function clearCar() {
  localStorage.removeItem('car');
}
