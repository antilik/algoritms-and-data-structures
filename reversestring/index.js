// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// First solution
function reverse(str) {
  return [...str].reverse().join('');
}

// Second solution
// function reverse(str) {
//   return [...str].reduce((acc, letter) => letter + acc, '');
//   return  [...str].reduceRight((acc, letter) => acc + letter, '');
// }

// Third solution
// function reverse(str) {
  // let reversedStr = '';
  // for (const letter of str) {
  //   reversedStr = letter + reversedStr;
  // }
  // return reversedStr;
// }

module.exports = reverse;
