function mineralMining(mineral, miningPower, duration, cost) {
  const minerals = {
    gold: { timeToGet: 30, marketPrice: 1 },
    silver: { timeToGet: 20, marketPrice: 0.6 },
    coper: { timeToGet: 5, marketPrice: 0.3 },
    uranium: { timeToGet: 75, marketPrice: 3 },
    platinum: { timeToGet: 15, marketPrice: 2 },
    titanium: { timeToGet: 55, marketPrice: 1.5 },
  };

  if (!minerals[mineral]) {
    return "Invalid mineral name";
  }

  const { timeToGet, marketPrice } = minerals[mineral];

  const income = (duration / timeToGet) * miningPower;
  const totalIncome = income * marketPrice;

  const profit = totalIncome - cost;

  if (cost > totalIncome) {
    return `Mineral mining at a loss ${profit}`;
  } else if (cost < totalIncome) {
    return `Mineral mining profit ${profit}`;
  } else {
    return `Mineral mining get nothing`;
  }
}

console.log(mineralMining("gold", 10, 70, 59)); // Mineral mining at a loss -35.666666666666664
console.log(mineralMining("rock", 10, 70, 40)); // Invalid mineral name
console.log(mineralMining("uranium", 10, 70, 150)); // Mineral mining at a loss -122
console.log(mineralMining("silver", 33, 200, 30)); // Mineral mining profit 168
console.log(mineralMining("titanium", 25, 100, 200)); // Mineral mining at a loss -131.8181818181818
console.log(mineralMining("gold", 1, 100, 15)); // Mineral mining at a loss -11.666666666666666
console.log(mineralMining("titanium", 20, 350, 150)); // Mineral mining at a loss 40.90909090909091

module.exports = mineralMining;
