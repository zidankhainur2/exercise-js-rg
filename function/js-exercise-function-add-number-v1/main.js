function addNumber(numStr, options) {
  let num = numStr.toString().split("");
  let numInt = num.map(Number);

  if (options === "right") {
    numInt.reverse();
  }

  for (let i = 0; i < numInt.length - 1; i++) {
    numInt[i] += numInt[i + 1];
  }

  numInt.pop();
  return numInt.join("");
}

console.log(addNumber("672318", "right"));

module.exports = addNumber;
