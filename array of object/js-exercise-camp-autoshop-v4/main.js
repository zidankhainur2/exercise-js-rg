function convertItems(items) {
  return items.map((item) => {
    const parts = item.split("|");
    return parts.length > 1 ? parts : [item];
  });
}

function filterItems(items) {
  return items
    .filter((item) => item.length === 3)
    .map((item) => [item[0], parseInt(item[1]), item[2]]);
}

function generateSpareParts(items) {
  return items.map((item) => ({
    name: item[0],
    price: item[1],
    category: item[2],
  }));
}

function itemsStatistics(items) {
  return items.reduce((acc, item) => {
    const category = item[2];
    if (
      category === "variation" ||
      category === "bodyParts" ||
      category === "electricity"
    ) {
      acc[category] = (acc[category] || 0) + 1;
    }
    return acc;
  }, {});
}

function generateItemsData(items) {
  const convertedItems = convertItems(items);
  const filteredItems = filterItems(convertedItems);
  const spareParts = generateSpareParts(filteredItems);
  const statistics = itemsStatistics(filteredItems);

  return {
    spare_parts: spareParts,
    statistics: statistics,
  };
}

const items = [
  "Spakbor Gordon|150000|variation",
  "Head Lamp",
  "USD KX150|8500000|bodyParts",
  "Handle Expedition|275000|variation",
  "Karet Body",
  "Body set KTM|1899950|bodyParts",
  "Jok Gordon|250000|variation",
  "Behel Bodyset Gordon",
  "CDI BRT KLX|625000|electricity",
  "Cover jok KLX|185000|variation",
];

console.log(generateItemsData(items));

module.exports = {
  convertItems,
  filterItems,
  generateSpareParts,
  itemsStatistics,
  generateItemsData,
};
