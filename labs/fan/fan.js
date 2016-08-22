var form    = document.querySelector('#message-form'),
    message = document.querySelector('#message'),
    board   = document.querySelector('.message-board');

// Handlebars
var tplMessage = document.querySelector('#tpl-message');

// Firebase
var fbRef = new Firebase('https://fanpage-95c03.firebaseio.com');

var app = {
    "messages": []
};

// Listners

form.addEventListener('submit', newMessage);
board.addEventListener('click', itemAction);
window.addEventListener('load', getMessages)

// Helpers

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return 'id' + s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

// Functions

function newMessage(e) {
  e.preventDefault();
  var content = message.value;
  var id = guid();
  var voteCount = 0;
  sendMessage(id, content, voteCount);
}

function sendMessage(id, content, voteCount) {
  var message = {
    id: id,
    content: content,
    voteCount: voteCount
  }
  app.messages.push(message);
  fbRef.set(app);
}

// Get and show messages

function getMessages() {
  fbRef.on('value', displayMessages);
};

function displayMessages(snapshot) {
  if (snapshot.val() === null) return;
  app = snapshot.val();
  
  var template = Handlebars.compile(tplMessage.textContent);
  var html = template(app.messages);
  board.innerHTML = html;
}

// Detect user action

function itemAction(e){
  var action = e.target.dataset.action;
  var id = e.target.closest('li').id;
  
  switch (action) {
    case 'delete':
      deleteMessage(id);
      break;
    case 'vote-up':
      voteCount(id, 1);
      break;
    case 'vote-down':
      voteCount(id, -1);
      break;
  }
}

// Delete message and update database

function deleteMessage(id){
  // Update UI
  var target = document.querySelector('#' + id);
  target.remove();
  
  // Update app object
  app.messages.forEach(function(item, index){
    if (item.id === id) {
      app.messages.splice(index, 1);
    }
  });
  
  fbRef.set(app);
}

// Update vote count and update database

function voteCount(id, value) {
  // Update UI
  var target = document.querySelector('#' + id + ' .votes');
  var curValue = target.textContent;
  var newValue = parseFloat(curValue) + parseFloat(value);
  
  if (newValue < 0) return;

  target.textContent = newValue;
  
  // Update app object
  app.messages.forEach(function(item, index){
    if (item.id === id) {
      app.messages[index].voteCount = newValue;
    }
  });
  
  fbRef.set(app);
}
