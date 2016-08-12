// Elements
// ------------------------------------
var form               = document.querySelector("form");
var zip                = document.querySelector("form .zip");
var results            = document.querySelector(".results");
var totalHeader        = document.querySelector(".total");

var restaurantTemplate = document.querySelector("#restaurant-template");
var headerTemplate = document.querySelector("#header-template");

// Event
// ------------------------------------
form.addEventListener('submit', getRestaurants);


// Event Handler
// ------------------------------------
function getRestaurants(e) {
	e.preventDefault();
	var search = zip.value;
	var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;
	$.getJSON(url, updateRestaurants);
}

// Update page
// ------------------------------------
function updateRestaurants(json) {
	
	// clears out the old results
	results.innerHTML = '';

	// create var so Handlebars can compile the template
	var template = Handlebars.compile(restaurantTemplate.textContent);
	// create the HTML by sending the json to the template
	var html = template(json.restaurants);
	// Dump the string into DOM element
	results.innerHTML = html;
	
	// Update the header
	var template = Handlebars.compile(headerTemplate.textContent);
	var html = template(json);
	totalHeader.innerHTML = html;
	
}
