// Setup / Data
// ------------------------------------------
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupIdea;
var favorites = [];


// Structure
// ------------------------------------------
var startup  = document.querySelector('.startup');
var generate = document.querySelector('.generate');
var save     = document.querySelector('.save');
var print    = document.querySelector('.print');
var list     = document.querySelector('.list');
var clear     = document.querySelector('.clear');


// Events
// ------------------------------------------
generate.addEventListener('click', generateStartup);
save.addEventListener('click', saveFavorite);
print.addEventListener('click', printFavorites);
clear.addEventListener('click', clearFavorites);


// Event Listeners
// ------------------------------------------
function generateStartup() {

	// TODO: generate two random index numbers, one for each array
	var startupXItem = randomInArray(startupX);
	var startupYItem = randomInArray(startupY);


	// TODO: concatenate the fixed text with the two random values
	//       to create a new startup idea like:
	//       "A startup that is Apple, but for Trello"
	startupIdea = 'A startup that is ' + startupXItem + ', but for ' + startupYItem;

	// Update page with new startup idea
	startup.innerHTML = startupIdea;
}

function randomInArray(arr) {
	var num  = Math.round(Math.random() * (arr.length - 1));
	var item = arr[num];
	return item;
}

function clearFavorites() {
  favorites = [];
	list.innerHTML = '';
}

function saveFavorite() {

	// TODO: add the new idea to the array
	if ( !favorites.includes(startupIdea) ) {
		favorites.push(startupIdea);
		console.log(favorites);
	}

}

function printFavorites() {
	var favoritesText = '';

	// clear out favorites element
	list.innerHTML = '';

	// TODO: concatenate all the favorites into one string
	// - hint: loop through all the favorites
	// - this should be stored in a variable named favoritesText
	// - each favorite should have an html br element between it (EG: "<br>")
	
	favorites.forEach(function(value, item){
		favoritesText += '<div>' + value + '</div>';
	});
		
	// update the list element with the new concatenated string
	list.innerHTML = favoritesText;
}


// Init
// ------------------------------------------
generateStartup();
