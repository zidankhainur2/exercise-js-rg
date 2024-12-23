function clockConversion(hour, params) {
  if (hour < 1) {
    return "Hour cannot be under 1";
  }

  if (params === "minutes") {
    return hour * 60;
  }

  if (params === "seconds") {
    return hour * 3600;
  }
}

console.log(clockConversion(-1, "minutes"));
console.log(clockConversion(3, "minutes"));
console.log(clockConversion(1, "seconds"));

module.exports = clockConversion;
