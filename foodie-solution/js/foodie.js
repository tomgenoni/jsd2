// Elements
// ------------------------------------
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");


// Event
// ------------------------------------
form.addEventListener('submit', getRestaurants);


// Event Handler
// ------------------------------------
function getRestaurants(event) {
	event.preventDefault();

	var search = zip.value;

	var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;

	$.getJSON(url, updateRestaurants);
}

// Update page
// ------------------------------------
function updateRestaurants(json) {

	// clears out the old results
	results.innerHTML = '';

	// add new result for each item in array
	//json.restaurants.forEach(createRestaurant);
	
	var source = document.querySelector('#restaurants-template');
	console.log(source);
	
}
	
function createRestaurant(restaurant) {
	var li = document.createElement("li");

	var template =
	'<img src="' + restaurant.image_url + '">' +
	'<h2>' + restaurant.name + '</h2>'  +
	'<p>' + restaurant.address + '</p>';
	
	li.innerHTML = template;
	results.appendChild(li);
}
