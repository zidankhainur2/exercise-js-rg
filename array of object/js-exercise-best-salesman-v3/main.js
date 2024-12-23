function rekapSalesByName(data, name) {
  // Filter data berdasarkan nama sales dan hitung total penjualan mereka
  return data
    .filter((item) => item.salesName === name)
    .reduce((total, item) => total + item.totalSales, 0);
}

function salesReport(data, correction) {
  const salesNames = ["Adi", "Budi", "Poltak", "Sri", "Udin"];

  correction.forEach((cor) => {
    if (cor.type === "tambah") {

      data.push({
        salesName: cor.salesName,
        totalSales: cor.totalSales,
        salesDate: cor.salesDate,
      });
    } else if (cor.type === "koreksi") {

      const target = data.find(
        (item) =>
          item.salesName === cor.salesName && item.salesDate === cor.salesDate
      );
      if (target) {

        target.totalSales = cor.totalSales;
      }
    }
  });

  let totalSalesByName = {};
  salesNames.forEach((name) => {
    totalSalesByName[name] = rekapSalesByName(data, name);
  });

  const monthlySales = Object.values(totalSalesByName).reduce(
    (sum, total) => sum + total,
    0
  );

  let bestSalesman = "";
  let maxSales = 0;
  for (const name in totalSalesByName) {
    if (totalSalesByName[name] > maxSales) {
      maxSales = totalSalesByName[name];
      bestSalesman = name;
    }
  }

  return {
    monthlySales,
    totalSalesByName,
    bestSalesman: `Penjualan terbanyak dilakukan oleh ${bestSalesman} dengan total penjualan dalam 1 bulan sebesar ${maxSales}`,
  };
}

module.exports = {
  salesReport,
};
