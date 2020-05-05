function myReplace(str, before, after) {
  let testForCapitalLetter = /^[A-Z]/.test(before);
  return testForCapitalLetter
    ? str.replace(before, after[0].toUpperCase() + after.slice(1))
    : str.replace(before, after);
}

console.log(
  myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')
);

// if (testForCapitalLetter) {
//   result = str.replace(before, after[0].toUpperCase() + after.slice(1));
//   return result;
// }
// result = str.replace(before, after);
// return result;
