// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// First approach
function capitalize(str) {
  const arrStr = str.split(" ");
  return arrStr.reduce(
    (acc, el) => acc.trim() + " " + el[0].toUpperCase() + el.slice(1),
    "",
  );
}

// Second approach
// function capitalize(str) {
//   const words = [];

//   for (let word of str.split(" ")) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(" ");
// }

// Third approach
// function capitalize(str) {
//   let sentence = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     if (i === 0 || str[i - 1] === " ") {
//       sentence = str[i].toUpperCase() + sentence;
//     } else {
//       sentence = str[i] + sentence;
//     }
//   }
//   return sentence;
// }

module.exports = capitalize;
