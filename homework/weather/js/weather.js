var form       = document.querySelector('#zip');
var formInput  = document.querySelector('#zip__input');
var body       = document.querySelector('body');
var results    = document.querySelector('.data');

var hdbWeather = document.querySelector('#hlb-weather');


form.addEventListener('submit', fetchWeather);

function fetchWeather(e) {
  e.preventDefault();
  body.className = '';
  
  var city = formInput.value;
  var url = 'http://api.wunderground.com/api/3478c11df41cd053/forecast/q/CA/' + city + '.json';
  $.getJSON(url, showWeather)
}

function showWeather(data) {
  
  if (data.response.error) {
    body.className = 'error';
  } else {
    var weather = data.forecast.simpleforecast.forecastday;
    
    var template = Handlebars.compile(hdbWeather.textContent);
    var html = template(weather);
    results.innerHTML = html;
    
    setTimeout(function(){
      body.classList.add('active');
    },1)
  }

}
