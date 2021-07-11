// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const multiplier = Math.sign(n);
  const positiveInt = Math.abs(n);
  return [...positiveInt.toString()].reverse().join("") * multiplier;
}

module.exports = reverseInt;
