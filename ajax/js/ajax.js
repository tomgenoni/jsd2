var url = 'https://api.consumerfinance.gov/data/hmda.json';

var jqxhr = $.getJSON(url, handleData);
var list = document.querySelector('ul');

// Callback function for AJAX request
function handleData(json) {
  var description = json['description'];
  var paragraph = document.querySelector('#description');
  paragraph.innerHTML = description;
  
  var concepts = json['_embedded']['concepts'];
  concepts.forEach(createConcept);
  
}

function createConcept(item) {
  var text = item['description'];
  var li = document.createElement('li');
  
  li.innerHTML = text;
  list.appendChild(li)
}
