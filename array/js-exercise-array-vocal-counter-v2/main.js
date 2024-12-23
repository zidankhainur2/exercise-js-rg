function vocalCounter(array) {
  let res = Array.from(array)
    .filter((letter) => "aeiouAIUEO".includes(letter))
    .join("");
  let word = res.length;

  if (res.length === 0) {
    return "Tidak ada huruf vokal yang ditemukan";
  }
  return `Jumlah vokal yang ditemukan sebanyak ${word} berupa ${res}`;
}

console.log(vocalCounter(["x", "A", 5, "o", 1, "T", "b"]));
console.log(vocalCounter([-10, "E", "e", "z", "p", "i", 4]));
console.log(vocalCounter(["q", "W", "r", "t", "Y"]));

module.exports = vocalCounter;
