function resistorValue(bandColor1, bandColor2, bandColor3, bandColor4) {
  const colorValues = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  const multipliers = {
    black: 1,
    brown: 10,
    red: 100,
    orange: 1000,
    yellow: 10000,
    green: 100000,
    blue: 1000000,
    violet: 10000000,
    gold: 0.1,
    silver: 0.01,
  };

  const tolerances = {
    brown: 1,
    red: 2,
    gold: 5,
    silver: 10,
  };

  const significantFigure = parseInt(
    `${colorValues[bandColor1]}${colorValues[bandColor2]}`
  );

  const value = significantFigure * multipliers[bandColor3];

  const tolerance = tolerances[bandColor4];

  return `${value} ohm ±${tolerance}%`;
}

console.log(resistorValue("brown", "black", "red", "gold"));
console.log(resistorValue("red", "red", "red", "gold"));
console.log(resistorValue("yellow", "violet", "green", "silver"));
console.log(resistorValue("blue", "grey", "green", "silver"));

module.exports = resistorValue;
