// Elements
// ----------------
var body = document.querySelector('body');
var ul   = document.querySelector('ul');


// Events
// ----------------
ul.addEventListener('click', clickColor);
window.addEventListener('load', restoreColor);

function clickColor(e) {
	// console.log('clickColor',e.target);

	// Event Delegation
	// "Return Early" if an li element was not clicked
	if (e.target.nodeName != "LI") return;

	var color = e.target.dataset.color;
	
	changeColor(color);
	saveTheme(color);
}

function changeColor(color) {
	body.className = color;
}

function saveTheme(color){
	var theme = {
		color: color
	}

	localStorage.setItem('theme', JSON.stringify(theme));
}

function restoreColor() {
 var theme = localStorage.getItem('theme');
 if (theme === null) return;
 theme = JSON.parse(theme);
 
 changeColor(theme.color);
}
