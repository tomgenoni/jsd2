// Variables

var list       = document.querySelector('#sources-list');
var main       = document.querySelector('#main');
var popUp      = document.querySelector('#popUp');
var summary    = document.querySelector('#popUp .container');
var close      = document.querySelector('.closePopUp');
var sourceName = document.querySelector('#source-name');
var feedFail   = document.querySelector('#feed-fail');

var currentList = [];

var sources = [
  { title: 'CNN', source: 'cnn' },
  { title: 'Bloomberg', source: 'bloomberg' },
  { title: 'The Hindu', source: 'the-hindu' }
]

var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];


// Event listeners

window.addEventListener('load', init);
list.addEventListener('click', getDropItem);
main.addEventListener('click', showSummary);
close.addEventListener('click', closePopUp);


// Functions

function init() {
  // Populate the drop down menu
  var hlbMenu    = document.querySelector('#hlb-menu');
  var template   = Handlebars.compile(hlbMenu.textContent);
  var html       = template(sources);
  list.innerHTML = html;
  
  // Load default feed
  var source = sources[0].source;
  var title  = sources[0].title;
  loadFeed(source)
  updateMenu(title);
}

// Get the item from the dropdown that's clicked
function getDropItem(e) {
  if (e.target.nodeName !== 'LI') return;
  var source = e.target.dataset.source;
  var title  = e.target.textContent;
  loadFeed(source)
  updateMenu(title);
}

// Load the feed given a source and title
function loadFeed(source) {
  // Clear out feed fail message if active.
  feedFail.classList = '';
  popUp.classList    = 'loader';

  var url   = 'https://newsapi.org/v1/articles?source=' + source + '&apiKey=9f5a0b68f26a4c8eb90d6afc7cb41c36';
  var jqxhr = $.getJSON(url, massageData);
  
  jqxhr.fail(function(){
    feedFail.classList = 'is-active';
  });
  jqxhr.complete(function(){
    popUp.classList = 'hidden';
  });
}

function updateMenu(title) {
  sourceName.textContent = ': ' + title;
}

function massageData(data) {
  data.articles.forEach(function(item, index){
    if (item.publishedAt) {
      item.publishedAtClean = cleanDate(item.publishedAt)
    }
  })
  showFeed(data);
}

function cleanDate(str) {
  
  var stamp    = str.split('T');
  stamp.date   = stamp[0].split('-');
  stamp.time   = stamp[1].split(':');
  var period   = 'am';
  
  var monthNum = parseInt(stamp.date[1], 10) - 1;
  var month    = months[monthNum];
  var day      = stamp.date[2];
  var year     = stamp.date[0];
   
  var dayClean = month + ' ' + day + ', ' + year;
  
  var hour = parseInt(stamp.time[0], 10);
  var minute = stamp.time[1];

  if (hour > 13) {
    hour = hour - 12;
    period = 'pm';
  }
  
  var timeClean = hour + ':' + minute + period;
  var cleanDate = dayClean + ' at ' + timeClean;
  return cleanDate;
}

function showFeed(data) {
  currentList    = data.articles;
  var hlbItem    = document.querySelector('#hlb-item');
  var template   = Handlebars.compile(hlbItem.textContent);
  var html       = template(currentList);
  main.innerHTML = html;
}

function showSummary(e) {
  if (e) e.preventDefault();
  var index = e.target.closest('article').dataset.index;
  
  var data = {
    title: currentList[index].title,
    description: currentList[index].description,
    url: currentList[index].url
  }

  var hlbItemSummary = document.querySelector('#hlb-item-summary');
  var template       = Handlebars.compile(hlbItemSummary.textContent);
  var html           = template(data);
  summary.innerHTML  = html;
  // Show popup
  popUp.classList    = '';
}

function closePopUp() {
  popUp.classList.add('hidden');
}
