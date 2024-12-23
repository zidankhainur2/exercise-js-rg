function reverseUnique(word) {
  let reverse = word.split("").reverse().join("");
  let result = "";

  for (let i = 0; i < reverse.length; i++) {
    if (reverse[i] !== reverse[i - 1]) {
      result += reverse[i];
    }
  }
  return result;
}

console.log(reverseUnique("greating")); //gnitaerg
console.log(reverseUnique("learning")); //gninrael
console.log(reverseUnique("book")); // kob
console.log(reverseUnique("RuangGuru")); //uruGnauR
console.log(reverseUnique("I am reading a book how to hunt a deer")); // red a tnuh ot woh kob a gnidaer ma I

module.exports = reverseUnique;
