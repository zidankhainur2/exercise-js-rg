function travelDiscount(id, amount) {
  let status = "";
  let total = 0;
  let diskon = 0;
  let hargaPerOrang = 0;

  if (id.indexOf("STD") !== -1) {
    status = "STUDENT";
    hargaPerOrang = 20000;
  } else if (id.indexOf("CORP") !== -1) {
    status = "CORPORATE";
    hargaPerOrang = 50000;
  } else {
    return "Maaf, voucher yang anda miliki tidak valid!";
  }

  total = hargaPerOrang * amount;

  switch (status) {
    case "STUDENT":
      if (amount > 20) {
        diskon = 0.2;
      }
      break;
    case "CORPORATE":
      if (amount > 30) {
        diskon = 0.25;
      }
      break;
    default:
      return "Maaf, voucher yang anda miliki tidak valid!";
  }

  total -= total * diskon;

  return `Selamat! Voucher untuk ${status} dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${total}.`;
}

console.log(travelDiscount("STD9845-8461-121", 11));
console.log(travelDiscount("CORP8135-4612-912", 30));
console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP5611-8456-999", 31));
console.log(travelDiscount("8347-7-9124365", 99));
console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount;
