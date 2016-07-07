
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////

function calcFahrenheitToCelcius(fahrenheit) {
  // Takes fahrenheit value and returns celcius to 2 decimal points
  var celcius = ((fahrenheit - 32) * (5/9)).toFixed(2);
  return celcius;
}

function calcCircumference(radius) {
  // Takes radius value and returns circumference
  var circumference = 2 * Math.PI * radius;
  return circumference;
}

function calcLongestSide(a, b) {
  // Takes two shortest sides of a triangle and returns longest side
  var hypotenuse = Math.sqrt(a*a + b*b);
  return hypotenuse;
}
