var firebaseURL = 'https://test-f69a8.firebaseio.com/';
var firebaseReference = new Firebase(firebaseURL);

var button = document.querySelector('button');

button.addEventListener('click', saveChanges);
window.addEventListener('load', restoreChanges);

function saveChanges() {
  
  var theme = {
    color: 'blue'
  }
  
  firebaseReference.set(theme);
}

function restoreChanges(){
  firebaseReference.on('value', changeColor)
}

function changeColor(snapshot) {
  console.log(snapshot.val());
}
