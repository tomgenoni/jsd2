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
var cycleBtn       = document.querySelector('.cycle-button');

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
  clearLights();
  clearInterval(cautionInterval);
  trafficLight.classList.add(action);
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
  e.preventDefault();
  clearLights();
  cautionInterval = setInterval(cautionLight, 500);
}

function cautionLight() {
  clearInterval(cautionInterval);
  trafficLight.classList.toggle('slow');
}

// Cycle variables and functions

function cycleInit() {
  lightIndex = 0;
  cycleNum   = 0;
  clearInterval(cycleTimer);
  cycleTimer = setInterval(cycle, 300);
}

function cycle() {
  changeLight(null, lightActions[lightIndex]);
  
  lightIndex++;
  cycleNum++; 
  if (lightIndex === lightActions.length) {
    lightIndex = 0;
  }
  if (cycleNum === cycleNumLimit) {
    lightIndex = 0;
    cycleNum   = 0;
    clearInterval(cycleTimer);
    clearLights();
  }
}
