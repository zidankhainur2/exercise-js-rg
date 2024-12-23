function calcAge(age, params) {
  if (age < 1) {
    return "Age cannot be under 1 year";
  }

  if ((params === "months")) {
    return age * 12;
  }

  if ((params === "days")) {
    return age * 365;
  }
}

console.log(calcAge(-1, "months"));
console.log(calcAge(3, "months"));
console.log(calcAge(1, "days"));

module.exports = calcAge;
