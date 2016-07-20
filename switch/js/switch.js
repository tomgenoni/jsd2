// var food = 'mac n cheese';
//
// switch (food) {
//   case 'soup':
//     console.log('i like soup');
//     break;
//   case 'mac n cheese':
//     console.log('i like mac n cheese');
//     break;
//   case 'bananas':
//     console.log('i like bananas');
//     break;
// }

var grade = 'A';
// var grade = prompt('What grade did you get?')

// if (grade === 'A') {
//   console.log('awesome');
// } else if (grade === 'B') {
//   console.log('pretty good');
// } else if (grade === 'C') {
//   console.log('not so good');
// } else if (grade === 'D') {
//   console.log('eek');
// } else if (grade === 'F') {
//   console.log('you failed');
// } else {
//   console.log('Unexpected input');
// }

switch (grade) {
  case 'A':
  case 'B':
  case 'C':
    console.log('pass');
    break;
  case 'D':
  case 'F':
    console.log('you failed');
    break;
  default:
    console.log('Unexpected input');
}
