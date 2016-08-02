// Setup
// ----------------------------------------------

var cautionInterval;
var cycleTimer;
var lightActions  = ['stop','slow','go'];
var lightIndex    = 0;
var cycleNum      = 0;
var cycleNumLimit = 10;

// Structure
// ----------------------------------------------

var trafficLight = document.querySelector('#traffic-light');

var stopBtn      = document.querySelector('.stop-button');
var slowBtn      = document.querySelector('.slow-button');
var goBtn        = document.querySelector('.go-button');
var cautionBtn   = document.querySelector('.caution-button');
var cycleBtn     = document.querySelector('.cycle-button');

// Events
// ----------------------------------------------

stopBtn.addEventListener('click', lightStop);
slowBtn.addEventListener('click', lightSlow);
goBtn.addEventListener('click', lightGo);
cautionBtn.addEventListener('click', lightCaution);
cycleBtn.addEventListener('click', cycleInit);


// Event handlers
// ----------------------------------------------

function clearLights() {
  trafficLight.className = "";
}

function changeLight(e, action) {
  if (e) {
    e.preventDefault();
  }

  // Clear the caution light if it's on.
  clearInterval(cautionInterval);

  clearLights();
  trafficLight.classList.add(action);
}

function lightStop(e) {
  clearInterval(cycleTimer);
  changeLight(e, 'stop');
}

function lightSlow(e) {
  clearInterval(cycleTimer);
  changeLight(e, 'slow');
}

function lightGo(e) {
  clearInterval(cycleTimer);
  changeLight(e, 'go');
}

// Caution light

function lightCaution(e) {
  e.preventDefault();
  clearInterval(cycleTimer);
  clearLights();
  cautionInterval = setInterval(function(){
    trafficLight.classList.toggle('slow');
  }, 500);
}

// Cycle variables and functions

function resetCycle() {
  lightIndex = 0;
  cycleNum   = 0;
  clearInterval(cycleTimer);
  clearLights();
}

function cycleInit() {
  resetCycle();
  cycleTimer = setInterval(cycle, 300);
}

function cycle() {
  // Pulling from the actions array
  changeLight(null, lightActions[lightIndex]);
  
  // Increment the array index.
  lightIndex++;
  
  if (lightIndex === lightActions.length) {
    lightIndex = 0;
  }
  
  // If we're done with the full cycle
  // reset everything
  cycleNum++; 
  
  if (cycleNum === cycleNumLimit) {
    resetCycle();
  }
}
