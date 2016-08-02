// Setup
// ----------------------------------------------


// Structure
// ----------------------------------------------

var trafficLight = document.querySelector('#traffic-light');

var stopBtn      = document.querySelector('.stop-button');
var slowBtn      = document.querySelector('.slow-button');
var goBtn        = document.querySelector('.go-button');
var cautionBtn   = document.querySelector('.caution-button');
var cycleBtn     = document.querySelector('.cycle-button');

// Cycle variables
var cautionInterval;
var cycleTimer;
var actionsArr      = ['stop','slow','go'];
var actionIndex     = 0;
var cycleIndex      = 0;
var cycleLoops      = 9;

// Events
// ----------------------------------------------

stopBtn.addEventListener('click', changeLight);
slowBtn.addEventListener('click', changeLight);
goBtn.addEventListener('click', changeLight);

cautionBtn.addEventListener('click', lightCaution);
cycleBtn.addEventListener('click', cycleInit);


// Event handlers
// ----------------------------------------------

function clearLights() {
  clearInterval(cautionInterval);
  clearInterval(cycleTimer);
  trafficLight.className = "";
}

// Change the light by grabbing the data-attr
function changeLight(action) {
  clearLights();
  var action = this.dataset.action;
  trafficLight.classList = action;
}

// Caution light
function lightCaution() {
  clearLights();
  cautionInterval = setInterval(function(){
    trafficLight.classList.toggle('slow');
  }, 500);
}

// Cycle functions
function cycleInit() {
  resetCycle();
  cycleTimer = setInterval(cycle, 300);
}

function resetCycle() {
  actionIndex = 0;
  cycleIndex  = 0;
  clearLights();
}

function cycle() {
  var action = actionsArr[actionIndex];
  trafficLight.classList = action;
  actionIndex++;
  
  // Increment the array index.
  if (actionIndex === actionsArr.length) {
    actionIndex = 0;
  }
  
  // If we're done with the full cycle
  // reset everything
  if (cycleIndex === cycleLoops)      {
    resetCycle();
  }
  cycleIndex++; 
}
