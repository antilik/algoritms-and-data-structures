// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const calculation = [...str].reduce((acc, char) => {
    return { ...acc, [char]: acc[char] + 1 || 1 };
  }, {});

  let maxchar = str[0];
  Object.keys(calculation).forEach((key) => {
    if (calculation[key] > calculation[maxchar]) {
      maxchar = key;
    }
  });
  return maxchar;
}

module.exports = maxChar;
