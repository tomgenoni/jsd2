var score       = document.querySelector("#score");
var increase5   = document.querySelector("#increase-5");
var decrease5   = document.querySelector("#decrease-5");
var customScore = document.querySelector("#custom-score");
var setScore    = document.querySelector("#submit-custom-score");
var points      = 0;

increase5.addEventListener('click', add5);
decrease5.addEventListener('click', subtract5);
setScore.addEventListener('click', getUserInput);

function add5(e) {
  e.preventDefault();
  points = points + 5;
  updateScore(points)
}

function subtract5(e) {
  e.preventDefault();
  points = points - 5;
  updateScore(points)
}

function getUserInput(e) {
  e.preventDefault();
  var custom = customScore.value;
  if ( isNaN(custom) ) {
    alert("Please enter in a number");
  } else {
    points = custom;
    updateScore(custom);
  }
}

function updateScore(value) {
  score.innerHTML = value + ' Points';
}
