function generateParenthesesPair(numberOfPairs) {
  let res = "";

  for (let i = 0; i < numberOfPairs; i++) {
    res += "(";
  }
  for (let k = 0; k < numberOfPairs; k++) {
    res += ")";
  }
  return res;
}

console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
