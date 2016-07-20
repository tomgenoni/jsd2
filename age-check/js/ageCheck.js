// Structure
// ------------------------------------------
var input  = document.querySelector('.age-check input');
var button = document.querySelector('.age-check button');
var p      = document.querySelector('.age-check p');


// Events
// ------------------------------------------
button.addEventListener('click', checkAge);


// Event Listeners
// ------------------------------------------
function checkAge(e) {
	var age = parseInt(input.value);
	var privilege = getPrivilege(age);
	displayPrivilege(privilege);
}


// Update page functions
// ------------------------------------------
function displayPrivilege(privilege) {
	p.innerHTML = privilege
}




// Determine the privilege to display
// ------------------------------------------

// TODO: write the getPrivilege function here

function getPrivilege(age) {
	var output;
	
	if ( age < 16 ) {
		output = "You can't do much";
	} else if (age < 18) {
		output = "You can drive";
	} else if (age < 21) {
		output = "You can vote"
	} else if (age < 25) {
		output = "You can drink"
	} else if (age < 35) {
		output = "You can rent a car"
	} else if (age < 62) {
		output = "You can run for president"
	} else {
		output = "You can collect social secuity"
	}
	return output;
}
