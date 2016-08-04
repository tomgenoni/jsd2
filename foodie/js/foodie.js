var results = document.querySelector('.results');

// Events
// -------------------------

var form = document.querySelector('form');
var zip  = document.querySelector('.zip');

// Listener
// -------------------------

form.addEventListener('submit', getRestaurants);

// Update page
// -------------------------

function getRestaurants(e) {
  e.preventDefault();
  var search = zip.value;
  var url = 'http://opentable.herokuapp.com/api/restaurants?zip=' + search;
  $.getJSON(url, updateRestaurants)
}

function updateRestaurants(json) {
  zip.value = '';
  results.innerHTML = '';
  json.restaurants.forEach(createRestaurant);
}

function createRestaurant(restuarant) {
  
  var entry = document.createElement('li');
  
  entry.img                 = document.createElement('img');
  entry.name                = document.createElement('h2');
  entry.address             = document.createElement('p');
  
  entry.img.src             = restuarant.image_url;
  entry.name.textContent    = restuarant.name;
  entry.address.textContent = restuarant.address;
  
  entry.appendChild(entry.img);
  entry.appendChild(entry.name);
  entry.appendChild(entry.address);
  
  results.appendChild(entry);
}
