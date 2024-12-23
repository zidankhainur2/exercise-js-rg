function counterApp(arr) {
  if (arr === undefined || !Array.isArray(arr)) {
    return "Invalid input";
  }
  if (arr.length === 0) {
    return "Data not found";
  }
  const frequencyMap = {};

  arr.forEach(function (item) {
    let key = item.toString();
    frequencyMap[key] = (frequencyMap[key] || 0) + 1;
  });

  return frequencyMap;
}

console.log(
  counterApp([
    "Hikman",
    "Naufal",
    "Kanda",
    "Arya",
    "Kanda",
    "Hikman",
    "Naufal",
    "Hikman",
    "Kanda",
    "Kanda",
  ])
);
console.log(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]));
console.log(counterApp([]));
console.log(counterApp());

module.exports = counterApp;
