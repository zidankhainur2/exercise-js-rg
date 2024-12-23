function discountChecker(costumers, date) {
  let diskonCostumers = [];
  let day = parseInt(date.split("-")[0]);

  for (let i = 0; i < costumers.length; i++) {
    let totalPrice = parseInt(costumers[i][0].substring(2));
    let customerType = costumers[i][1];

    if (customerType === "non-member") {
      if (
        (day % 2 === 0 && totalPrice % 2 === 0) ||
        (day % 2 !== 0 && totalPrice % 2 !== 0)
      ) {
        diskonCostumers.push(costumers[i]);
      }
    }
    if (customerType === "member") {
      diskonCostumers.push(costumers[i]);
    }
  }

  return diskonCostumers.length > 0 ? diskonCostumers : "none";
}

let costumers = [
  ["$ 228", "member"],
  ["$ 19", "non-member"],
  ["$ 238", "non-member"],
  ["$ 49", "member"],
];

console.log(discountChecker(costumers, "28-10-2022"));

var costumers2 = [
  ["$ 754", "member"],
  ["$ 233", "member"],
  ["$ 31", "non-member"],
  ["$ 332", "non-member"],
];

console.log(discountChecker(costumers2, "11-06-2022"));

module.exports = discountChecker;
