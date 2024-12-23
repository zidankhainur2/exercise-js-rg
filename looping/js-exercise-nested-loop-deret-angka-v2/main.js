function deretanAngkaHinggaN(n) {
  let res = "";
  if (n <= 1) {
    return "Incorrect param";
  }

  for (let i = n - 1; i >= 1; i--) {
    res += i;
    for (let j = i - 1; j >= 1; j--) {
      res += j;
    }
  }
  return res;
}

console.log(deretanAngkaHinggaN(5));

module.exports = deretanAngkaHinggaN;
