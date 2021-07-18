// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let countChar = 1;
  const width = n * 2 - 1;
  const printMiddle = (count) => "#".repeat(count);
  const diffStart = (charLength) =>
    width - charLength ? (width - charLength) / 2 + charLength : 0; // (5 - 1)/2 = 2
  const printStart = (specialChars) =>
    specialChars.padStart(diffStart(specialChars.length));
  const printEnd = (startMiddle) => startMiddle.padEnd(width);

  for (let i = 0; i < n; i++) {
    if (i > 0) {
      countChar += 2;
    }
    const middle = printMiddle(countChar);
    const beginningMiddle = printStart(middle);
    const allRow = printEnd(beginningMiddle);
    console.log(allRow);
  }
}

module.exports = pyramid;
