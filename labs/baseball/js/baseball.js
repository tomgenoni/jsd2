// Elements
// ------------------------------------------
var date      = document.querySelector('.date');
var games     = document.querySelector('.games');

var gamesTpl  = document.querySelector('#games-tpl');
var dateTpl   = document.querySelector('#date-tpl');


// Templates
// ------------------------------------------

// Game date
var template = Handlebars.compile(dateTpl.textContent);
var html = template(mockdata);
date.innerHTML = html;


// Show the game data
var template = Handlebars.compile(gamesTpl.textContent);
var html = template(mockdata);
games.innerHTML = html;
