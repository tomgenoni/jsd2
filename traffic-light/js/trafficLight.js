// Setup
// ----------------------------------------------

var cautionInterval;
var cycleTimer;


// Structure
// ----------------------------------------------

var trafficLight = document.querySelector('#traffic-light');

var stopBtn      = document.querySelector('.stop-button');
var slowBtn      = document.querySelector('.slow-button');
var goBtn        = document.querySelector('.go-button');
var cautionBtn   = document.querySelector('.caution-button');
var runBtn       = document.querySelector('.run-button');

// Events
// ----------------------------------------------

stopBtn.addEventListener('click', lightStop);
slowBtn.addEventListener('click', lightSlow);
goBtn.addEventListener('click', lightGo);
cautionBtn.addEventListener('click', lightCaution);
runBtn.addEventListener('click', cycleInit);


// Event handlers
// ----------------------------------------------

function clearLights() {
  trafficLight.className = "";
}

function changeLight(e, action) {
  if (e) {
    e.preventDefault();
  }
  clearLights();
  clearInterval(cautionInterval);

  if (action === 'caution') {
    cautionInterval = setInterval(cautionLight, 1000)
  } else {
    trafficLight.classList.add(action);
  }
}

function lightStop(e) {
  changeLight(e, 'stop');
}

function lightSlow(e) {
  changeLight(e, 'slow');
}

function lightGo(e) {
  changeLight(e, 'go');
}

function lightCaution(e) {
  changeLight(e, 'caution');
}

function cautionLight() {
  trafficLight.classList.toggle('slow');
}


function cycleInit() {
  var actions = ['stop','slow','go'];
  var index = 0;
  var pass = 0;
  
  cycleTimer = setInterval(function(){
    changeLight(null, actions[index])
    index++;
    pass++;
    if (index == actions.length) {
      index = 0;
    }
    console.log(pass);
    if (pass === 13) {
      clearInterval(cycleTimer);
      clearLights();
    }
  }, 1000);
}

function cycle() {
  
}
