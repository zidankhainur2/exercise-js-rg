function checkDatatype(input) {
  if (input === null) {
    return "null";
  } else if (Array.isArray(input)) {
    return "array";
  } else if (typeof input === "function") {
    return "function";
  } else {
    return typeof input;
  }
}

module.exports = { checkDatatype };
