var form       = document.querySelector('#zip');
var body       = document.querySelector('body');
var results    = document.querySelector('.data');

var hdbWeather = document.querySelector('#hlb-weather');


form.addEventListener('submit', fetchWeather);

function fetchWeather(e) {
  e.preventDefault();
  body.classList.remove('active');
  showWeather();
}

function showWeather() {
  var weather = data.forecast.simpleforecast.forecastday;
  
  var template = Handlebars.compile(hdbWeather.textContent);
  var html = template(weather);
  
  results.innerHTML = html;
  
  setTimeout(function(){
    body.classList.add('active');
  },1)

}
