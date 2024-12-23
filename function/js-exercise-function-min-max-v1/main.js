function minMax(str) {
  let angka = str.split("");
  angka.sort((a, b) => a - b);

  if (angka[0] === angka[angka.length - 1]) {
    return `Nilai terkecil dan terbesar adalah ${angka[0]}`;
  }
  return `Nilai terkecil adalah ${angka[0]}, dan terbesar adalah ${
    angka[angka.length - 1]
  }`;
}

console.log(minMax("34126"));
console.log(minMax("1"));

module.exports = minMax;
