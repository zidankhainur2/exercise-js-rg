function splitToArr(str) {
  if (str === undefined) {
    return "Invalid input";
  }

  if (str === "") {
    return "Data not available";
  }

  let names = str.split(/[-;]/);

  function capitalize(str) {
    let parts = str.split(".");
    parts[0] = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
    return parts.join(".");
  }

  return names.map((name) => capitalize(name));
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"));
console.log(
  splitToArr(
    "ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"
  )
);
console.log(splitToArr(""));
console.log(splitToArr());

module.exports = splitToArr;
