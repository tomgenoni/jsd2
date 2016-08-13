var form = document.querySelector('#zip');
var body = document.querySelector('body');

form.addEventListener('submit', fetchWeather);

function fetchWeather(e) {
  e.preventDefault();
  body.classList.remove('active');
  showWeather();
}


function showWeather(data) {
  body.classList.add('active');
  
}
