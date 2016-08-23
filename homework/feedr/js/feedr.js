var list       = document.querySelector('#sources-list');
var main       = document.querySelector('#main');
var popUp      = document.querySelector('#popUp');
var summary    = document.querySelector('#popUp .container');
var close      = document.querySelector('.closePopUp');
var sourceName = document.querySelector('#source-name');

var currentList = [];

var sources = [
  { title: 'CNN', source: 'cnn' },
  { title: 'Bloomberg', source: 'bloomberg' },
  { title: 'The Hindu', source: 'the-hindu' }
]

window.addEventListener('load', init);
list.addEventListener('click', loadFeed);
main.addEventListener('click', showSummary);
close.addEventListener('click', closePopUp);


function init() {
  var hlbMenu = document.querySelector('#hlb-menu');
  var template = Handlebars.compile(hlbMenu.textContent);
  var html = template(sources);
  list.innerHTML = html;
}

function loadFeed(e) {
  if (e.target.nodeName !== 'LI') return;
  var source = e.target.dataset.source;
  var title = e.target.textContent;
  
  var url = 'https://newsapi.org/v1/articles?source=' + source + '&apiKey=9f5a0b68f26a4c8eb90d6afc7cb41c36';
  $.getJSON(url, showFeed);
  updateMenu(title);
}

function updateMenu(title) {
  sourceName.textContent = ': ' + title;
}

function showFeed(data) {
  currentList = data;
  var hlbItem = document.querySelector('#hlb-item');
  var template = Handlebars.compile(hlbItem.textContent);
  var html = template(data.articles);
  main.innerHTML = html;
}

function showSummary(e) {
  if (e) e.preventDefault();
  var index = e.target.closest('article').dataset.index;
  
  var data = {
    title: currentList.articles[index].title,
    description: currentList.articles[index].description,
    url: currentList.articles[index].url
  }

  var hlbItemSummary = document.querySelector('#hlb-item-summary');
  var template = Handlebars.compile(hlbItemSummary.textContent);
  var html = template(data);
  summary.innerHTML = html;
  
  popUp.classList = '';
}

function closePopUp() {
  popUp.classList.add('hidden');
}
