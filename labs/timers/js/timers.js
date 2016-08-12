// function boom() {
//   console.log('boom!');
// }
//
// var bomb = setTimeout(boom, 5000);
//
// function defuseBomb() {
//   clearTimeout(bomb);
// }

var i = 0;

function stop() {
  clearInterval(counter)
}

function count() {
  i++;
  console.log("Count:",i);

  if ( i === 3 ) {
    stop()
  }
}

var counter = setInterval(count, 1000)
