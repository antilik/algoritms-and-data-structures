// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') // --> 3
//   vowels('Why do you ask?'); // --> 4
//   vowels('Why?'); // --> 0

// First solution
// function vowels(str) {
//   return !str.length ? 0 : str
//     .toLowerCase()
//     .split('')
//     .reduce((acc, char) => {
//    return (['a','e','i','o','u'].includes(char)) ? acc += 1 : acc;
//   }, 0);
// }

// Second solution
// function vowels(str) {
//   let count = 0;
//   for (const char of str.toLowerCase()) {
//     ['a','e','i','o','u'].includes(char) ? count++ : count;
//   }
//   return count;
// }
// function vowels(str) {
//   let count = 0;
//   str.toLowerCase().split('').forEach((char) => {
//     ['a', 'e', 'i', 'o', 'u'].includes(char) ? count++ : count;
//   });
//   return count;
// }

// Third solution
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches?.length || 0;
}

module.exports = vowels;
