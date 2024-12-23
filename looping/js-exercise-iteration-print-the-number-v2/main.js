function printNumber(totalNumber) {
  let result = "";

  let repeat = Math.floor(totalNumber / 3);
  let remainder = totalNumber % 3;

  for (let i = 0; i < repeat; i++) {
    result += "123";
  }

  for (let j = 1; j <= remainder; j++) {
    result += j;
  }
  return result;
}
// 4, 7, 10
console.log(printNumber(2));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber;
