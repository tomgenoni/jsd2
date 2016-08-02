var url = 'https://api.consumerfinance.gov/data/hmda.json';

var jqxhr = $.getJSON(url, handleData);

// Callback function for AJAX request
function handleData(json) {
  var description = json['description'];
  var paragraph = document.querySelector('#description');
  paragraph.innerHTML = description;
}
