function quantityDiscount(quantity, price) {
  let diskon;

  quantity != 0;

  if (quantity >= 5 && quantity < 10) {
    diskon = (15 / 100) * price;
  } else if (quantity >= 10) {
    diskon = (20 / 100) * price;
  } else {
    diskon = 0;
  }

  let total = price - diskon;
  let pajak = total * 0.11;
  let hasil = (total + pajak) * quantity;
  hasil = hasil.toFixed(2);
  return Number(hasil);
}

console.log(quantityDiscount(1, 100));
console.log(quantityDiscount(3, 100));
console.log(quantityDiscount(5, 100));
console.log(quantityDiscount(10, 100));
console.log(quantityDiscount(15, 3));
console.log(quantityDiscount(3, 10000));
console.log(quantityDiscount(12, 10000));

module.exports = quantityDiscount;
