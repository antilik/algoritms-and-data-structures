// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// First approach
function steps(n) {
  const helper = (count, char) => new Array(count).fill(char);

  for (let i = 0; i < n; i++) {
    console.log([...helper(i + 1, "#"), ...helper(n - i - 1, " ")].join(""));
  }
}

// Second approach
// function steps(n) {
//   if (n <= 0) {
//     return;
//   }
//   const getString = (count) => "#".repeat(count).padEnd(n);

//   for (let i = 0; i < n; i++) {
//     console.log(getString(i + 1));
//   }
// }

// Third approach
// function steps(n) {
//   const getArrWithChar = (count, char) =>
//     count ? new Array(count).fill(char) : [];

//   printIt(n);
//   function printIt(n, m = 1) {
//     if (n === 0) {
//       return;
//     }

//     console.log(
//       [...getArrWithChar(m, "#"), ...getArrWithChar(n - 1, " ")].join(""),
//     );
//     printIt(n - 1, m + 1);
//   }
// }

module.exports = steps;
