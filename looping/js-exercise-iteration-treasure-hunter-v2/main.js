function trasureHunter(dailyLog) {
  let count = 0;
  for (let i = 0; i < dailyLog.length; i++) {
    let symbol = dailyLog[i];
    if (symbol === "$") {
      count += 100;
    } else if (symbol === "x") {
      if (count < 10) {
        count = 0;
      } else {
        count -= 10;
      }
    } else if (symbol === "#") {
      if (count == 0) {
        count = 0;
      } else {
        count -= count * 0.5;
      }
    }
  }
  return count;
}

console.log(trasureHunter("$x$#x$")); // 185
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 160
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.4375

module.exports = trasureHunter;
