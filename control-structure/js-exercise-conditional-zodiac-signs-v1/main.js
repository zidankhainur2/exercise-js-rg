function zodiacSign(day, month) {
  let zodiak = "";

  // Cek apakah bulan valid
  const validMonths = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  if (!validMonths.includes(month)) {
    return `Nama bulan salah`;
  }

  if (day == 0) {
    return `Input tanggal salah`;
  }

  // Cek apakah hari sesuai dengan jumlah hari dalam bulan
  switch (month) {
    case "Januari":
    case "Maret":
    case "Mei":
    case "Juli":
    case "Agustus":
    case "Oktober":
    case "Desember":
      if (day > 31) {
        return `Input tanggal salah`;
      }
      break;
    case "April":
    case "Juni":
    case "September":
    case "November":
      if (day > 30) {
        return `Input tanggal salah`;
      }
      break;
    case "Februari":
      if (day > 29) {
        return `Input tanggal salah`;
      }
      break;
    default:
      break;
  }

  // Tentukan zodiak berdasarkan tanggal dan bulan
  switch (month) {
    case "Januari":
      zodiak = day >= 20 ? "Aquarius" : "Capricorn";
      break;
    case "Februari":
      zodiak = day >= 19 ? "Pisces" : "Aquarius";
      break;
    case "Maret":
      zodiak = day >= 21 ? "Aries" : "Pisces";
      break;
    case "April":
      zodiak = day >= 20 ? "Taurus" : "Aries";
      break;
    case "Mei":
      zodiak = day >= 21 ? "Gemini" : "Taurus";
      break;
    case "Juni":
      zodiak = day >= 21 ? "Cancer" : "Gemini";
      break;
    case "Juli":
      zodiak = day >= 23 ? "Leo" : "Cancer";
      break;
    case "Agustus":
      zodiak = day >= 23 ? "Virgo" : "Leo";
      break;
    case "September":
      zodiak = day >= 23 ? "Libra" : "Virgo";
      break;
    case "Oktober":
      zodiak = day >= 23 ? "Scorpio" : "Libra";
      break;
    case "November":
      zodiak = day >= 22 ? "Sagittarius" : "Scorpio";
      break;
    case "Desember":
      zodiak = day >= 22 ? "Capricorn" : "Sagittarius";
      break;
    default:
      break;
  }

  return zodiak;
}

console.log(zodiacSign(30, "Desember"));
console.log(zodiacSign(31, "Desember"));
console.log(zodiacSign(41, "Desember"));
console.log(zodiacSign(31, "Februari"));
console.log(zodiacSign(29, "Februari"));
console.log(zodiacSign(29, "Januari"));

module.exports = zodiacSign;
