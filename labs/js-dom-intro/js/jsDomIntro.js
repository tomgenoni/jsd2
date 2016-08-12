// Structure
// ------------------------------------------
var form = document.querySelector("body form");


// Events
// ------------------------------------------
form.addEventListener('submit', createNewThing);


// Event Listeners
// ------------------------------------------
function createNewThing(e) {
  e.preventDefault();
  var input = document.querySelector('.new-thing');
  var value = input.value;

  if ( value === "" ) {
    alert("You must type in a value!");
  } else {
    addToList(value);
    input.value = "";
  }
}

// Update Page function
// ------------------------------------------
function addToList(newThing) {
  var list          = document.querySelector('#fav-list');
  var newItem       = document.createElement('li');
  newItem.innerHTML = newThing;
  newItem.classList.add('fav-thing');
  list.appendChild(newItem);
}
