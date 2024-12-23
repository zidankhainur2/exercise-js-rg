function countAndSum(number) {
  let result = "";

  let repeat = Math.floor(number / 3);
  let remainder = number % 3;

  for (let i = 0; i < repeat; i++) {
    result += "123";
  }

  for (let j = 1; j <= remainder; j++) {
    result += j;
  }

  const arr = result.split("");
  let sum = 0;

  for (let k = 0; k < arr.length; k++) {
    sum += parseInt(arr[k]);
  }
  return sum;
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 0

module.exports = countAndSum;
