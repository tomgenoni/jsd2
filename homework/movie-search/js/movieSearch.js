// Setup
// ----------------------------------------------

var searchInput = document.querySelector("#searchInput");
var searchForm  = document.querySelector("#searchForm");

var details     = document.querySelector(".details");
var tplMovie   = document.querySelector("#tpl-movie");

var results     = document.querySelector(".results");
var tplMovies   = document.querySelector("#tpl-movies");


// Structure
// ----------------------------------------------


// Events
// ----------------------------------------------

searchForm.addEventListener('submit', getMovies);
results.addEventListener('click', getMovie)

// Event handlers
// ----------------------------------------------

function getMovies(event) {
  event.preventDefault();
  
  var searchTerm = searchInput.value;
  var apiRoot = 'https://www.omdbapi.com/?'
  var url = apiRoot + 's=' + searchTerm;
  
  $.getJSON(url, moviesResult);
}

function getMovie(e) {
  var li = e.target.closest('li');
  var imdbID = li.id;
  var apiRoot = 'https://www.omdbapi.com/?'
  var url = apiRoot + 'i=' + imdbID;
  
  $.getJSON(url, movieResult);
}


// Update page
// ----------------------------------------------

function moviesResult(data) {
  var template = Handlebars.compile(tplMovies.textContent);
  var html = template(data);
  details.innerHTML = '';
  results.innerHTML = html;
}

function movieResult(data) {
  var template = Handlebars.compile(tplMovie.textContent);
  var html = template(data);
  details.innerHTML = html;
}

Handlebars.registerHelper("checkPoster", function(Poster) {
  var url = Poster;
  if (Poster === 'N/A') {
    url = 'i/empty.png';
  }
  return url;
});
