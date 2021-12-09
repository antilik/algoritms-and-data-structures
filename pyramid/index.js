// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
// pyramid(2);
//       ' # '
//       '###'
// pyramid(4);
//       '  #  '
//       ' ### '
//       '#####'

// First solution
// function pyramid(n) {
//   let countChar = 1;
//   const width = n * 2 - 1;
//   const printMiddle = (count) => "#".repeat(count);
//   const calculateDifference4Start = (charLength) =>
//     width - charLength ? (width - charLength) / 2 + charLength : 0;
//   const printStart = (specialChars) =>
//     specialChars.padStart(calculateDifference4Start(specialChars.length));
//   const printEnd = (startMiddle) => startMiddle.padEnd(width);
//
//   for (let i = 0; i < n; i++) {
//     if (i > 0) {
//       countChar += 2;
//     }
//     const middle = printMiddle(countChar);
//     const beginningMiddle = printStart(middle);
//     const allRow = printEnd(beginningMiddle);
//     console.log(allRow);
//   }
// }

// Second solution (better)
// function pyramid(n) {
//   const rowLength = n * 2 - 1;
//   const getRow = (symbolQuantity, padLength) =>
//     ' '.repeat(padLength) + '#'.repeat(symbolQuantity) + ' '.repeat(padLength);
//
//   for (let index = 1; index <= n; index++) {
//     const specialQuantity = index * 2 - 1;
//     const halfPadLength = Math.floor((rowLength - specialQuantity) / 2);
//     console.log(getRow(specialQuantity, halfPadLength));
//   }
// }

// Third solution
function pyramid(n) {
  const width = n*2 -1;
  let counter = 1;

  const printRow = () => {
    const middle = counter*2 -1;
    const halfOfEmptySpace = Math.floor((width - middle)/2);
    const halfOfEmptySpaceSymbols = (middle === width) ? "" : " ".repeat(halfOfEmptySpace);
    const row = halfOfEmptySpaceSymbols + '#'.repeat(middle) + halfOfEmptySpaceSymbols;
    console.log(row);

    if (counter !== n) {
      counter +=1;
      printRow()
    }
  };
  (n >0 ) && printRow();
}

module.exports = pyramid;
