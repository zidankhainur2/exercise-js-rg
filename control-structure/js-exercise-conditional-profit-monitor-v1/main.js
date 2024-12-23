function profitMonitor(todayProfit, lastProfit) {
  if (todayProfit === 0 || lastProfit === 0) {
    return "Profit tidak boleh sama dengan 0";
  }

  if (todayProfit > lastProfit) {
    return `Profit naik sebanyak ${todayProfit - lastProfit} point`;
  }

  if (todayProfit < lastProfit) {
    return `Profit turun sebanyak ${lastProfit - todayProfit} point`;
  }

  if (todayProfit === lastProfit) {
    return "Profit stabil";
  }
}

console.log(profitMonitor(100, 50));
console.log(profitMonitor(50, 100));
console.log(profitMonitor(100, 100));

module.exports = profitMonitor;
