// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var addresses = document.querySelector('main .addresses');


// Events
// ------------------------------------------
button.addEventListener('click', generateAddress);


// Setup
// ------------------------------------------
// TODO: create your arrays here (street, city, state, etc)

var streetNumbers = [234, 56, 7, 453];
var streetNames   = ['Main', 'Grand Avenue', 'Post', 'Divisadero'];
var cities        = ['San Francisco', 'Sacramento', 'Santa Fe', 'Portland'];
var states        = ['California', 'New Mexico', 'New York', 'Washington'];
var zips          = [67364, 12341, 87123, 98765];

// Event Listeners
// ------------------------------------------
function generateAddress(e) {
	var streetNumber = randomInArray(streetNumbers);
	var streetName   = randomInArray(streetNames);
	var city         = randomInArray(cities);
	var state        = randomInArray(states);
	var zip          = randomInArray(zips);
	
	var address = streetNumber + " " + streetName + ", " + city + ", " + state + " " + zip;
	addAddress(address);
}

function randomInArray(arr) {
	var num  = Math.round(Math.random() * (arr.length - 1));
	var item = arr[num];
	return item;
}

// Update page functions
// ------------------------------------------
function addAddress(address) {
	var li       = document.createElement('li');
	li.innerHTML = address;
	addresses.innerHTML = "";
	addresses.appendChild(li);
}
